import styled from 'styled-components/native';
import { MediumText, LargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const GreenLink = styled(MediumText)`
	color: ${theme.PRIMARY_COLOR};
	font-size: ${theme.FONT_SIZE_MEDIUM};
	font-weight: bold;
	text-decoration: none;
	text-align: center;
`;

export const TitleText = styled(LargeText)`
	color: ${theme.GRAY_COLOR_900}
	font-weight: 600;
	line-height: 28px;
	text-align: left;
	padding-bottom: 5%;
 `;

export const SubtitleText = styled.Text`
	color: ${theme.GRAY};
	font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
	font-weight: ${theme.FONT_REGULAR};
	line-height: 28px;
	margin-bottom: 10px;
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
