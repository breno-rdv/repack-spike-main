import React from 'react';
import { ExitIconView, ImageView, ModalView, TitleText, SpacingView, CloseImage, OverlayView } from './Error.css';
import { Image, Modal, TouchableWithoutFeedback } from 'react-native';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/close.png';
import warningIcon from '../../../../../p1p3-mobile/src/assets/icons/alert/warning/warning_big.png';
import { Button } from '../Button';
import { ButtonContainer } from '../../../../../p1p3-mobile/src/scenes/OnboardScene/OnboardScene.css';

export interface ErrorProps {
  titleMessage: string;
  buttonText: string;
  sceneName: string;
  modalVisible: boolean;
  onPress: any;
  onPressButton: any;
}

export const ErrorModal: React.FC<ErrorProps> = ({ ...props }: ErrorProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onPress}
      testID={props.sceneName}
    >
      <TouchableWithoutFeedback onPress={props.onPress}>
        <OverlayView />
      </TouchableWithoutFeedback>
      <ModalView>
        <ExitIconView onPress={props.onPress}>
          <CloseImage source={closeIcon} />
        </ExitIconView>
        <ImageView>
          <Image source={warningIcon} />
        </ImageView>
        <TitleText>
          {props.titleMessage}
          {'!'}
        </TitleText>
        {props.buttonText ? (
          <ButtonContainer>
            <Button testID="mainButton" text={props.buttonText} onPress={props.onPressButton} boldText />
          </ButtonContainer>
        ) : (
          <SpacingView />
        )}
      </ModalView>
    </Modal>
  );
};
