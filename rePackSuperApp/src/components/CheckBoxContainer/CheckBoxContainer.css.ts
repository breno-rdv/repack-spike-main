import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const CheckBoxView = styled.View`
	width: auto;
	flex-direction: row;
	font-family: ${theme.FONT_FAMILY};
	justify-content: flex-start;
	align-items: center;
	padding: 5px;
`;

export const CheckBoxText = styled.Text`
	margin-left: 15px;
	margin-right: 15px;
	font-style: normal;
	font-weight: 400;
	font-size: ${theme.FONT_SIZE_MEDIUM};
	color: ${theme.BLACK};
	line-height: 20px;
`;
