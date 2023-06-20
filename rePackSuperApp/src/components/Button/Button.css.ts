import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { FullRowContainer, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? theme.GRAY_COLOR_50 : theme.SECONDARY_COLOR)};
  margin-top: 10px;
  justify-content: center;
  height: ${theme.STANDARD_BUTTON_HEIGHT};
  width: 100%;
  border-radius: ${theme.BORDER_RADIUS};
`;

export const ButtonContainerSecondary = styled(ButtonContainer)<{ borderWidth?: number }>`
  background-color: ${props => (props.disabled ? theme.GRAY_COLOR_50 : theme.WHITE)};
  border-color: ${theme.PRIMARY_COLOR};
	border-width: ${props => (props.borderWidth ? props.borderWidth : 1)}px;
`;

export const RowContainer = styled(FullRowContainer)`
  width: auto;
  justify-content: center;
`;

export const IconContainer = styled.View`
  width: auto;
  padding-right: 5px;
  justify-content: center;
`;

export const TextContainer = styled.View`
`;

export const ButtonText = styled(MediumText)`
`;

export const SecondaryButtonText = styled(ButtonText)`
	color: ${theme.PRIMARY_COLOR}
`;

export const BoldText = styled(ButtonText)`
  font-weight: 700;
	color: ${theme.BLACK}
	font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  line-height: 24px;
`;

export const SecondaryBoldText = styled(BoldText)`
  color: ${theme.PRIMARY_COLOR}
`;
