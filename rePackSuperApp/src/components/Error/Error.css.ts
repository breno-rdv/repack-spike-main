import styled from 'styled-components/native';
import { MediumText, LargeText, ExtraLargeText, CustomMediumText, MediumLargeText } from '../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../p1p3-mobile/src/assets/variables.css';

export const ErrorMessage = styled(MediumText)`
	color: ${theme.GRAY_COLOR_800};
	margin-vertical: 20px;
`;

export const Icon = styled.Image`
	height: 100px;
	width: 100px;
	margin-top: -20%;
	margin-bottom: 10px;
`;

export const Title = styled(MediumLargeText)`
	font-weight: ${theme.FONT_BOLD};
	line-height: 28px;
	margin-top: 10px;
`;

export const Subtitle = styled(CustomMediumText)`
	font-weight: ${theme.FONT_REGULAR};
	line-height: 22px;
	margin-top: 10px;
	margin-bottom: 20px;
`;

export const FormText = styled(MediumText)`
	font-size: ${theme.FONT_SIZE_MEDIUM};
	margin-bottom: 0;
	text-decoration: none;
	text-align: center;
`;

export const GreenLink = styled(MediumText)`
  	color: ${theme.PRIMARY_COLOR};
  	font-size: ${theme.FONT_SIZE_MEDIUM};
  	font-weight: bold;
  	text-decoration: none;
  	text-align: center;
`;

export const TitleText = styled(LargeText)`
	color: ${theme.GRAY}
	padding-top: 18px;
	font-weight: 700;
	line-height: 25px;
	text-align:center
 `;

export const ModalView = styled.View`
	background-color: ${theme.WHITE};
	width:100%;
	padding:8px 20px 20px 20px;
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
  	margin-bottom: 10px;
`;

export const ImageView = styled.View`
	justify-content: center;
	align-items: center;
`;

export const ButtonText = styled.Text`
	font-weight: 700;
	font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
	line-height: 24px;
  	color: ${theme.BLACK};
`;

export const ButtonContainer = styled.View`
	justify-content: flex-end;
	padding-bottom: 10%
`;

export const SpacingView = styled.View`
  	height: 40px;
`;

export const CloseImage = styled.Image`
  	flex-grow: 2;
  	width: 30px;
  	height: 30px;
  	resize-mode: contain;
	align-self: center;
`;

export const TitleBold = styled(ExtraLargeText)`
	color: ${theme.GRAY_COLOR_27};
	font-weight: bold;
	text-decoration: none;
	text-align: left;
	padding-bottom: 10px;
`;

export const FormTextGray = styled(CustomMediumText)`
	color: ${theme.GRAY};
	font-weight: 400;
	margin-bottom: 0;
	text-decoration: none;
	text-align: left;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-right: 10px;
`;

export const FullWidthContainer = styled.View`
	width: ${theme.SCREEN_WIDTH}px;
	height: 100%;
	padding: 20px;
	align-items: flex-start;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	flex: 1;
	background-color: ${theme.WHITE};
	font-family: ${theme.FONT_FAMILY};  
`;
