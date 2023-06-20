import React from 'react';
import { CenteredView, ImageView, ModalView, NormalText, TitleText } from './ContactUs.css';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { Image, Modal } from 'react-native';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/close.png';
import { ContactUsLink } from './ContactUsLink';

export interface ContactUsProps {
  titleMessage: string;
  sceneName: string;
  modalVisible: boolean;
  onPress: any;
  emailSubject?: string;
  emailBody?: string;
}

export const ContactUsModal: React.FC<ContactUsProps> = ({ ...props }: ContactUsProps) => {
  const { locale } = useLocale();
  return (
    <CenteredView>
      <Modal animationType="slide" transparent={true} visible={props.modalVisible} onRequestClose={props.onPress}>
        <CenteredView>
          <ModalView>
            <ImageView onPress={props.onPress}>
              <Image source={closeIcon} />
            </ImageView>
            <TitleText>{props.titleMessage}</TitleText>
            <NormalText>{translateWithFallback('FormContact', 'Contact us by phone:', locale)}</NormalText>
            <ContactUsLink textMessage={'0800 723 3464'} sceneName={props.sceneName} />
            <NormalText>
              {translateWithFallback('FormMessage', 'If you prefer, send us a message to the e-mail below:', locale)}
            </NormalText>
            <ContactUsLink
              textMessage={'BJD-FaleConosco@JohnDeere.com'}
              email
              sceneName={props.sceneName}
              emailSubject={props.emailSubject}
              emailBody={props.emailBody}
            />
          </ModalView>
        </CenteredView>
      </Modal>
    </CenteredView>
  );
};
