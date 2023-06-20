import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const InputText = styled.Text`
	color: ${props => props.color};
	font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
`;

export const InputTextContainer = styled.View`
	align-self: flex-start;
	background-color: ${theme.WHITE};
	margin-bottom: -10px;
	margin-left: 15px;
	padding-left: 1%;
	padding-right: 1%;
	zIndex: 5;
`;

export const CustomInput = styled.TextInput`
  flex:1;
  color: ${theme.BLACK};
`;

export const InputView = styled.View`
  border-color:${props => props.borderColor}
  border-radius: ${theme.BORDER_RADIUS};
  height: 50px;
  color: ${theme.BLACK};
  padding-left: 20px;
  border-width: ${theme.BORDER_WIDTH};
  flex-direction:row;
  justify-content: center;
  align-items: center;
`;
