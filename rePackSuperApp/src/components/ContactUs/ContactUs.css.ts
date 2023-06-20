import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { CustomMediumText, LargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';

interface ContactBankTextProps {
  fontWeight?: string;
  fontSize?: string;
  lineHeight?: string;
}
export const ContactBankText = styled.Text<ContactBankTextProps>`
 	display: flex;
	font-weight: ${props => props.fontWeight || theme.FONT_BOLD};
	font-size: ${props => props.fontSize || theme.FONT_SIZE_LARGE};
	text-align: center;
	color: ${theme.PRIMARY_COLOR};
	line-height: ${props => props.lineHeight || '40px'};
	text-decoration-line: underline;
	letter-spacing: -0.32px;
 `;

export const TitleText = styled(LargeText)`
	color: ${theme.GRAY};
	font-weight: 700;
	line-height: 25px;
	text-align: center;
 `;

export const NormalText = styled(CustomMediumText)`
	font-weight: 400;
	color: ${theme.GRAY};
	line-height: 28px;
	letter-spacing: 0.6px;
	text-align: center;
	margin-top: 20px;
 `;

export const ModalView = styled.View`
	background-color: ${theme.WHITE};
	width: 85%;
	padding: 8px 20px 20px 20px;
	border-radius: 4px;
	align-items: center;
	justify-content: center;
 `;

export const CenteredView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.6);
 `;

export const ImageView = styled.TouchableOpacity`
	align-self: flex-end;
	height: 35px;
	justify-content: center;
`;

export const BottomView = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	background-color: rgba(0,0,0,0.6);
 `;

export const BottomModalView = styled.View`
	background-color: ${theme.WHITE};
	width: 100%;
	padding: 3% 4% 20% 4%;
	align-items: center;
	justify-content: center;
 `;

export const BottomImageView = styled.TouchableOpacity`
  align-self: flex-end;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const BottomNormalText = styled.Text`
	font-weight: 400;
	color: ${theme.GRAY};
	line-height: 28px;
  	font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
	text-align: center;
 `;

export const BottomModalTitleText = styled.Text`
  	padding-top: 12px;
	padding-bottom: 10px;
  	color: ${theme.GRAY_COLOR_900};
	font-style: normal;
	font-weight: 600;
	line-height: 28px;
	font-size: ${theme.FONT_SIZE_LARGE};
	text-align: center;
`;
