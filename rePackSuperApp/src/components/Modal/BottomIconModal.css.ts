import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const BottomView = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	background-color: rgba(0,0,0,0.6);
 `;

export const ModalView = styled.View`
	background-color: ${theme.WHITE};
	width: 100%;
	padding: 3% 4% 20% 4%;
	align-items: center;
	justify-content: center;
 `;

export const ImageView = styled.TouchableOpacity`
  align-self: flex-end;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const NormalText = styled.Text`
	font-weight: 400;
	color: ${theme.GRAY};
	line-height: 28px;
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
	text-align: center;
 `;

export const ModalTitleText = styled.Text`
  padding-top: 12px;
  color: ${theme.GRAY_COLOR_900};
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
	font-size: ${theme.FONT_SIZE_LARGE};
	text-align: center;
`;
