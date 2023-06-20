import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import { Modal, ScrollView, TouchableWithoutFeedback } from 'react-native';
import closeIcon from '../../../../../p1p3-mobile/src/assets/icons/menu/close.png';
import plusGreen from '../../../../../p1p3-mobile/src/assets/icons/moreServices/plusGreen.png';
import userProfile from '../../../../../p1p3-mobile/src/assets/icons/moreServices/userProfile.png';
import * as variables from '../../../../../p1p3-mobile/src/assets/variables.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { hideCnpjMask, hideCpfMask } from '../../../../../p1p3-mobile/src/managers/Mask';
import { UserLinks } from '../../../../../p1p3-mobile/src/services/UserLinkService/userlinkService';
import * as S from './ListUserLinksModal.css';

export interface LinkAccountModalProps {
  sceneName: string;
  modalVisible: boolean;
  onPressClose: any;
  onPressButton: any;
  onPressUpdateCustomer: any;
  userLinks: UserLinks;
  actualUserGovId: string;
}

export const ListUserLinksModal: React.FC<LinkAccountModalProps> = ({ ...props }: LinkAccountModalProps) => {
  const { locale } = useLocale();

  const userLinksButtons = [];

  props.userLinks.links.forEach((link, index) => {
    userLinksButtons.push(
      <S.CustomerButtom
        testID={'govIdLink:' + index}
        key={'govIdLink:' + index}
        backgroundColor={props.actualUserGovId === link.govId ? variables.GRAY_COLOR_50 : variables.WHITE}
        onPress={() => props.onPressUpdateCustomer(link)}
      >
        <S.CustomerView>
          <S.CustomerProfileView>
            <S.ProfileImage source={userProfile} />
            <S.CustomerTextView>
              <S.HeaderText ellipsizeMode="tail" numberOfLines={1}>
                {link.name}
              </S.HeaderText>
              {link.govId.length === 11 ? (
                <S.HeaderText>
                  {translateWithFallback('CPF', 'CPF:', locale)} {hideCpfMask(link.govId)}
                </S.HeaderText>
              ) : (
                <S.HeaderText>
                  {translateWithFallback('CNPJ', 'CNPJ:', locale)} {hideCnpjMask(link.govId)}
                </S.HeaderText>
              )}
            </S.CustomerTextView>
          </S.CustomerProfileView>
          <S.RadioButtonView>
            <S.OuterRadioView
              style={{
                borderColor: props.actualUserGovId === link.govId ? variables.PRIMARY_COLOR : variables.GRAY_COLOR_3030,
              }}
            >
              {props.actualUserGovId === link.govId ? (
                <S.InnerRadioView
                  style={{
                    backgroundColor:
                      props.actualUserGovId === link.govId ? variables.PRIMARY_COLOR : variables.GRAY_COLOR_3030,
                  }}
                />
              ) : null}
            </S.OuterRadioView>
          </S.RadioButtonView>
        </S.CustomerView>
        <S.GrayLineView />
      </S.CustomerButtom>
    );
  });

  return (
    <Modal
      testID="listUserLinksModal"
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onPressClose}
    >
      <TouchableWithoutFeedback testID="overlayModalView" onPress={props.onPressClose}>
        <S.OverlayView />
      </TouchableWithoutFeedback>
      <S.ModalView>
        <S.HeaderView>
          <S.HeaderText>{translateWithFallback('ChangeAccount', 'Change account', locale)}</S.HeaderText>
          <S.ExitIconView testID="exitButton" onPress={props.onPressClose}>
            <S.CloseImage source={closeIcon} />
          </S.ExitIconView>
        </S.HeaderView>
        <S.GrayLineView />
        <ScrollView showsVerticalScrollIndicator={true} persistentScrollbar={true}>
          {userLinksButtons}
        </ScrollView>
        <S.BottomButton testID="createNewLinkButton" onPress={props.onPressButton}>
          <S.PlusImage source={plusGreen} />
          <S.GreenText>
            {translateWithFallback('AccessAnotherAccount', 'Access with another account', locale)}
          </S.GreenText>
        </S.BottomButton>
      </S.ModalView>
    </Modal>
  );
};
