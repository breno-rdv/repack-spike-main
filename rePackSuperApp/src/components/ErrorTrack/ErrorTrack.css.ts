import styled from 'styled-components/native';
import { ExtraLargeText, GlobalStyle, LargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const BoldText = styled(ExtraLargeText)`
  	color: ${theme.GRAY_COLOR_900};
	font-weight: 600;
	line-height: 28px;
	text-align:center;
	margin-top: 44px;
	margin-bottom:40px;
`;

export const NormalText = styled(LargeText)`
 	color: ${theme.GRAY};
	font-weight: 400;
	line-height: 28px;
	text-align:center;
`;

export const Container = styled(GlobalStyle)`
	padding: 0px;
	height: auto;
	flex:1
`;

export const ButtonContainer = styled.View`
	margin-top:44px;
	width:100%
`;
