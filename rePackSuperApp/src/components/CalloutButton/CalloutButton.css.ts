import styled from 'styled-components/native';
import { Platform } from 'react-native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const CalloutButtonStyled = styled.TouchableOpacity`
	align-self: flex-start;
	margin-left: 5%;
	margin-right: 5%;
	position: absolute;

	bottom: ${Platform.OS === 'android' ? '60px' : '65px'};
`;

export const CalloutButtonText = styled.Text`
	color: ${theme.GRAY};
	font-style: normal;
	font-weight: 500;
	text-align: left;
	align-self: flex-start;
	line-height: 24px;
	font-size: ${theme.FONT_SIZE_MEDIUM};
	text-decoration-line: underline;
`;
