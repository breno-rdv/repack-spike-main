import React from 'react';
import MetricsService, { CONTACT_BANK_EVENT_ID } from '../../../../../p1p3-mobile/src/services/MetricsService/MetricsService';
import { ContactBankText } from './ContactUs.css';
import { ContactUsByEmail, ContactUsByPhone } from './ContactUsButton';

export interface ContactUsProps {
  textMessage: string;
  sceneName: string;
  email?: boolean;
  emailSubject?: string;
  emailBody?: string;
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
}

export const ContactUsLink: React.FC<ContactUsProps> = ({ ...props }: ContactUsProps) => {
  return (
    <ContactBankText
      testID="contactLink"
      onPress={() => {
        MetricsService.logCustomEvent({ eventId: CONTACT_BANK_EVENT_ID, attributes: { scene: props.sceneName } });
        if (props.email) {
          ContactUsByEmail(props.emailSubject, props.emailBody);
        } else {
          ContactUsByPhone();
        }
      }}
      fontWeight={props.fontWeight}
      fontSize={props.fontSize}
      lineHeight={props.lineHeight}
    >
      {props.textMessage}
    </ContactBankText>
  );
};
