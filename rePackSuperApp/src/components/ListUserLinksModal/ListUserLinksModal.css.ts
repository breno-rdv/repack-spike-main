import styled from 'styled-components/native';
import { LargeText, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as variables from '../../../../../p1p3-mobile/src/assets/variables.css';

export const GreenLink = styled(MediumText)`
  color: ${variables.PRIMARY_COLOR};
  font-size: ${variables.FONT_SIZE_MEDIUM};
  font-weight: bold;
  text-decoration: none;
  text-align: center;
`;

export const TitleText = styled(LargeText)`
  color: ${variables.GRAY_COLOR_900}
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  padding-bottom: 5%;
 `;

export const ModalView = styled.View`
  background-color: ${variables.WHITE};
  max-height: ${variables.SCREEN_HEIGHT / 2}px
  width:100%;
  border-radius:4px;
  position: absolute;
  bottom: 0px;
 `;

export const OverlayView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.6);
 `;

export const ExitIconView = styled.TouchableOpacity`
  align-self: flex-end;
  height: 40px;
  width: 40px;
  justify-content: center;
`;

export const ImageView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.View`
  justify-content: space-between;
  padding-bottom: 3%;
`;

export const CloseImage = styled.Image`
  flex-grow: 2;
  width: 30px;
  height: 30px;
  resize-mode: contain;
  align-self: center;
`;

export const ProfileImage = styled.Image`
  width: 40px;
  height: 40px;
  resize-mode: contain;
  align-self: center;
`;

export const PlusImage = styled.Image`
  justify-content: center;
  align-items: center;
`;

export const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between
  padding: 6% 4% 6% 4%;
  align-items:center
`;

export const HeaderText = styled.Text`
  color: ${variables.GRAY}
  font-weight: ${variables.FONT_MEDIUM};
  font-size: ${variables.FONT_SIZE_CUSTOM_MEDIUM};
  line-height: 24px;
 `;

export const GreenText = styled.Text`
  flex:1
  color: ${variables.PRIMARY_COLOR}
  font-weight: ${variables.FONT_MEDIUM};
  font-size: ${variables.FONT_SIZE_CUSTOM_MEDIUM};
  line-height: 24px;
  align-self:center;
  text-align:center
 `;

export const GrayLineView = styled.View`
  border-color: ${variables.GRAY_COLOR_500}
  border-width:1px
  margin:0% 4% 0% 4%
`;

export const CustomerButtom = styled.TouchableOpacity`
  width: 100%
  background-color:${props => (props.backgroundColor ? props.backgroundColor : variables.WHITE)}
`;

export const BottomButton = styled.TouchableOpacity`
  flex-direction:row;
  width: 100%
  padding: 4% 7% 6% 7%
  align-items: center;
  text-align:center
`;

export const CustomerView = styled.View`
  display:flex
  flex-direction:row;
  justify-content: space-between
  width: 100%
  padding: 6% 4% 6% 4%;
`;

export const CustomerTextView = styled.View`
  flex:1
  flex-direction: column;
  padding-left: 5%
`;

export const CustomerProfileView = styled.View`
  flex:7
  flex-direction:row;
`;

export const OuterRadioView = styled.View`
  align-self: flex-end
  height: 24px;
  width: 24px;
  border-radius: 12px;
  border-width: 2px;
  align-items: center;
  justify-content: center;
`;

export const InnerRadioView = styled.View`
  height: 14px;
  width: 14px;
  border-radius: 7px;
`;

export const RadioButtonView = styled.View`
  flex:1
  justify-content:center
`;
