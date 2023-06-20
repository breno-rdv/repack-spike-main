import React from 'react';
import { Image, Modal, TouchableWithoutFeedback } from 'react-native';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/close.png';
import { BottomView, BottomImageView, BottomModalTitleText, BottomModalView, BottomNormalText } from './ContactUs.css';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { ContactUsLink } from './ContactUsLink';

export interface IContactUsBottomModalProps {
  testID?: string;
  modalVisible: boolean;
  icon: any;
  titleText: string;
  fallBack: any;
  sceneName: string;
}

export const ContactUsBottomModal: React.FC<IContactUsBottomModalProps> = props => {
  const { locale } = useLocale();

  const emailSubject = translateWithFallback('BottomContactUsEmailSubject', 'Banco John Deere - Error', locale);
  const emailBody = translateWithFallback(
    'BottomContactUsEmailBody',
    'I got an error while using the app.\nError Description:\n Name:\n CPF/CNPJ:',
    locale
  );

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={() => {
        props.fallBack();
      }}
      testID={props.testID}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          props.fallBack();
        }}
      >
        <BottomView>
          <BottomModalView>
            <BottomImageView
              onPress={() => {
                props.fallBack();
              }}
            >
              <Image source={closeIcon} />
            </BottomImageView>
            <Image source={props.icon} />
            <BottomModalTitleText>{props.titleText}</BottomModalTitleText>
            <BottomNormalText>{translateWithFallback('FormContact', 'Contact us by phone:', locale)}</BottomNormalText>
            <ContactUsLink textMessage={'0800 723 3464'} sceneName={props.sceneName} />
            <BottomNormalText>
              {translateWithFallback('FormMessage', 'If you prefer, send us a message to the e-mail below:', locale)}
            </BottomNormalText>
            <ContactUsLink
              textMessage={'BJD-FaleConosco@JohnDeere.com'}
              email
              sceneName={props.sceneName}
              emailSubject={emailSubject}
              emailBody={emailBody}
            />
          </BottomModalView>
        </BottomView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
