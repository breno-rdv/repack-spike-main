import React from 'react';
import { Alert, Linking, Platform } from 'react-native';
import MetricsService, {
  CONTACT_BANK_ERROR_EVENT_ID,
  CONTACT_BANK_EVENT_ID,
} from '../../../../../p1p3-mobile/src/services/MetricsService/MetricsService';
import { Button } from '../Button';

export interface ContactUsProps {
  textMessage: string;
  sceneName: string;
  email?: boolean;
  emailSubject?: string;
  emailBody?: string;
}

export const ContactUsByEmail = (emailSubject: string, emailBody: string) => {
  Linking.openURL(
    `mailto:BJD-FaleConosco@JohnDeere.com?subject=${encodeURI(emailSubject)}&body=${encodeURI(emailBody)}`
  ).catch(() => {
    contactMetricsLog();
  });
};

export const ContactUsByPhone = () => {
  const iosPhoneCall = `telprompt:0800 723 3464`;
  const androidPhoneCall = `tel:0800 723 3464`;
  const phoneNumber = Platform.OS !== 'android' ? iosPhoneCall : androidPhoneCall;

  Linking.canOpenURL(phoneNumber)
    .then(supported => {
      if (!supported) {
        Alert.alert('Phone number is not available');
        MetricsService.logCustomEvent({
          eventId: CONTACT_BANK_ERROR_EVENT_ID,
          attributes: { reason: 'Phone dial not supported' },
        });
      } else {
        return Linking.openURL(phoneNumber);
      }
    })
    .catch(() => {
      contactMetricsLog();
    });
};

export const contactMetricsLog = () => {
  MetricsService.logCustomEvent({
    eventId: CONTACT_BANK_ERROR_EVENT_ID,
    attributes: { reason: 'Generic error' },
  });
};

export const ContactUsButton: React.FC<ContactUsProps> = ({ ...props }: ContactUsProps) => {
  return (
    <Button
      testID="contactButton"
      text={props.textMessage}
      onPress={() => {
        MetricsService.logCustomEvent({ eventId: CONTACT_BANK_EVENT_ID, attributes: { scene: props.sceneName } });
        if (props.email) {
          ContactUsByEmail(props.emailSubject, props.emailBody);
        } else {
          ContactUsByPhone();
        }
      }}
    />
  );
};
