import React from 'react';
import {
  ExitIconView,
  ModalView,
  TitleText,
  CloseImage,
  OverlayView,
  ButtonContainer,
  SubtitleText,
} from './LinkAccountModal.css';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/close.png';
import { Button, SecondaryButton } from '../Button';

export interface LinkAccountModalProps {
  titleMessage: string;
  subtitleMessage: string;
  buttonText: string;
  secondaryButtonText: string;
  sceneName: string;
  modalVisible: boolean;
  onPressClose: any;
  onPressButton: any;
}

export const LinkAccountModal: React.FC<LinkAccountModalProps> = ({ ...props }: LinkAccountModalProps) => {
  return (
    <Modal
      testID="linkAccountModal"
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onPressClose}
    >
      <TouchableWithoutFeedback onPress={props.onPressClose}>
        <OverlayView />
      </TouchableWithoutFeedback>
      <ModalView>
        <ExitIconView onPress={props.onPressClose}>
          <CloseImage source={closeIcon} />
        </ExitIconView>
        <TitleText>{props.titleMessage}</TitleText>
        <SubtitleText>{props.subtitleMessage}</SubtitleText>
        <ButtonContainer>
          <Button testID="mainButton" text={props.buttonText} onPress={props.onPressButton} boldText />
        </ButtonContainer>
        <ButtonContainer>
          <SecondaryButton testID="mainButton" text={props.secondaryButtonText} onPress={props.onPressClose} boldText />
        </ButtonContainer>
      </ModalView>
    </Modal>
  );
};
