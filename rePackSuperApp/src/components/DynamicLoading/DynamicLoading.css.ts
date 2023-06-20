import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const PrimaryTextContainer = styled.View`
	justify-content: flex-start;
`;

export const PrimaryText = styled.Text`
	color: ${theme.GRAY};
	font-weight: 500;
	font-size: ${theme.FONT_SIZE_CUSTOM_LARGE};
	line-height: 38px;
	margin-bottom: 21px;
`;

export const ProgressLinearBar = styled.View`
	height: 10px;
	width: 100%;
	background-color: #e0e0de;
	border-radius: 50px;
`;

export const ProgressLinearBarContent = styled.View`
	height: 100%;
	width: ${props => props.completed}%;
	backgroundColor: ${theme.PRIMARY_COLOR};;
	border-radius: 10px;
	text-align: right;
`;

export const InfoContainer = styled.View`
  flex: 1;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
