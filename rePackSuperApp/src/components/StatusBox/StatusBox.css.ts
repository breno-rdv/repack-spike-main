import styled from 'styled-components/native';
import { FullRowContainer, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const RoundBoxContainer = styled(FullRowContainer)`
	width: auto;
	height: 26px;
	justify-content: center;
	background-color:  ${theme.BLUE_COLOR_2};
	border-color: ${theme.BLUE_COLOR_1};
 	border-width: 1px;
	border-radius: 30px;
	padding-horizontal: 8px;
	padding-vertical: 4px;
`;

export const StatusText = styled(MediumText)`
	width: auto;
	font-weight: 600;
`;
