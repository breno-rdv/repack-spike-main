import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const RadioButtonContainer = styled.TouchableOpacity`
	margin-top: 10px;
	flex-direction: row;
	align-items: center;
	height: ${theme.STANDARD_BUTTON_HEIGHT};
`;

export const RadioButtonText = styled.Text`
	font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
	margin-left: 12px;
	color: ${theme.GRAY_COLOR_3030}
`;

export const OuterRadioView = styled.View`
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
