import { Platform } from 'react-native';
import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const TitleText = styled.Text`
	color: ${theme.GRAY_COLOR_900};
	font-style: normal;
	font-weight: 700;
	text-align: left;
	align-self: flex-start;
	margin-left: 5%;
	margin-right: 5%;
	line-height: 28px;
	font-size: ${theme.FONT_SIZE_LARGE};
`;

export const ButtonContainer = styled.View`
	width: ${theme.SCREEN_WIDTH}px;
	flex: 1;
	justify-content: flex-end;
	margin-bottom: 0px;
`;

export const ContinueButton = styled.TouchableOpacity`
	background-color: ${props => (props.disabled ? theme.GRAY_COLOR_50 : theme.SECONDARY_COLOR)};
	margin-top: 10px;
	justify-content: center;
	height: ${theme.STANDARD_BUTTON_HEIGHT};
	width: 100%;
`;

export const ContinueButtonText = styled.Text`
	font-weight: 700;
	font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
	text-align: center;
	color: ${theme.BLACK};
	line-height: 24px;
`;

export const FullWidthContainer = styled.View`
	flex: 1;
	height: 100%;
	width: ${theme.SCREEN_WIDTH}px;
`;

export const InfoContainer = styled.View`
	flex: 1;
	justify-content: flex-end;
	height: 100%;
	width: 100%;
`;

export const TextContainer = styled.View`
	flex: 1;
	justify-content: space-around;
`;

export const Image = styled.Image`
	flex-grow: 2;
	width: ${theme.SCREEN_WIDTH / 1.5}px;
	height: ${theme.SCREEN_HEIGHT / 3}px;
	resize-mode: contain;
	align-self: center;
`;

export const PrimaryText = styled.Text`
	text-align: center;
	color: ${theme.GRAY_COLOR_900};
	font-weight: 600;
	font-size: ${theme.FONT_SIZE_EXTRA_LARGE};
	line-height: 28px;
`;

export const SecondaryText = styled.Text`
	font-size: ${theme.FONT_SIZE_LARGE};
	text-align: left;
	align-self: flex-start;
	margin-left: 5%;
	margin-right: 5%;
	color: ${theme.GRAY};
	font-weight: 400;
	line-height: 28px;
`;

export const CodeInputText = styled.Text`
	font-weight: 700;
	line-height: 16px;
	color: ${props => props.color};
	font-style: normal;
	align-self: flex-start;
	margin-top: ${theme.IS_SMALL_PHONE ? '5' : '16'}px;
	margin-bottom: ${theme.IS_SMALL_PHONE ? '5' : '16'}px;
	margin-left: ${theme.SCREEN_WIDTH / 20}px;
	font-size: ${theme.FONT_SIZE_MEDIUM};
`;

export const ErrorCodeInputText = styled.Text`
	font-weight: 700;
	line-height: 14px;
	color: ${props => props.color};
	font-style: normal;
	align-self: flex-start;
	margin-top: 16px;
	margin-bottom: 20px;
	margin-left: ${theme.SCREEN_WIDTH / 20}px;
	font-size: ${theme.FONT_SIZE_SMALL};
`;

export const TextInputTitle = styled.Text`
	color: ${theme.GRAY_COLOR_900};
	font-style: normal;
	font-weight: 700;
	text-align: left;
	align-self: flex-start;
	margin-left: 5%;
	margin-right: 5%;
	line-height: 28px;
	font-size: ${theme.FONT_SIZE_LARGE};
`;

export const UpdatePhoneButton = styled.TouchableOpacity`
	margin-left: 5%;
	margin-right: 5%;
	align-self: flex-end;
	bottom: 40px;
`;

export const UpdatePhoneButtonText = styled.Text`
	color: ${theme.GRAY};
	font-style: normal;
	font-weight: 500;
	text-align: left;
	align-self: flex-start;
	line-height: 24px;
	font-size: ${theme.FONT_SIZE_MEDIUM};
	text-decoration-line: underline;
`;

export const LinkSendCodeButton = styled.TouchableOpacity`
	z-index: 1;
	align-self: flex-start;
	margin-left: 5%;
	margin-right: 5%;
	position: absolute;
	bottom: ${Platform.OS === 'android' ? (theme.IS_SMALL_PHONE ? '30px' : '55px') : '65px'};
`;

export const LinkSendCodeText = styled.Text`
	color: ${theme.GRAY};
	font-style: normal;
	font-weight: 500;
	text-align: left;
	align-self: flex-start;
	line-height: 24px;
	font-size: ${theme.FONT_SIZE_MEDIUM};
	text-decoration-line: underline;
`;

export const CodeShownContainer = styled.View`
	padding:12px;
	justify-content: center;
	align-items: center;
	min-width: ${theme.SCREEN_WIDTH / 8}px;
	min-height: ${theme.SCREEN_WIDTH / 8}px;
	border-color: ${props => props.borderColor};
	border-radius: ${theme.BORDER_RADIUS};
	border-width: ${theme.BORDER_WIDTH};
`;

export const CodeShownText = styled.Text`
	text-align: center;
	font-weight: 400;
	font-size: ${theme.FONT_SIZE_LARGE};
	line-height: 25px;
	color: ${theme.BLACK};
`;

export const HiddenTextInput = styled.TextInput`
	position: absolute;
	height: 0;
	width: 0;
	opacity: 0;
	color: ${theme.BLACK};
`;

export const InputView = styled.Pressable`
	height: 50px;
	color: ${theme.BLACK};
	padding-right: 5%;
	padding-left:  5%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const OTPInputView = styled.View`
	flex: 1;
`;
