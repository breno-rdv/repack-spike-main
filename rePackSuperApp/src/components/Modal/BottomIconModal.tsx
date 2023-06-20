import React from 'react';
import { Image, Modal, TouchableWithoutFeedback } from 'react-native';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/close.png';
import { BottomView, ImageView, ModalTitleText, ModalView, NormalText } from './BottomIconModal.css';

export interface IBottomIconModalProps {
  testID?: string;
  modalVisible: boolean;
  icon: any;
  titleText: string;
  secondaryText: string;
  fallBack: any;
}

export const BottomIconModal: React.FC<IBottomIconModalProps> = props => {
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
          <ModalView>
            <ImageView
              onPress={() => {
                props.fallBack();
              }}
            >
              <Image source={closeIcon} />
            </ImageView>
            <Image source={props.icon} />
            <ModalTitleText>{props.titleText}</ModalTitleText>
            <NormalText>{props.secondaryText}</NormalText>
          </ModalView>
        </BottomView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
