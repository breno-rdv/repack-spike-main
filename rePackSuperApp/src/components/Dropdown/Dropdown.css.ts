import styled from 'styled-components/native';
import { FullRowContainer, HR, LargeText, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { TouchableOpacity } from 'react-native';

export const AbsoluteContainer = styled(FullRowContainer)`
  position: relative;
  z-index: 100;
  border-color: ${theme.PRIMARY_COLOR};
  border-width: 2px;
  border-radius: 4px;
  background-color: ${theme.WHITE};
`;

export const HeaderContainer = styled(FullRowContainer)`
  margin-top: 2px;
  padding-vertical: 10px;
  padding-left: 19px;
`;

export const GreenText = styled(MediumText)`
  color: ${theme.PRIMARY_COLOR};
  font-style: normal;
  font-weight: ${theme.FONT_MEDIUM};
`;

export const LabelContainer = styled.View`
  position: absolute;
  background-color: white;
  top: -55%;
  left: 5%;
`;

export const HRContainer = styled(FullRowContainer)`
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const StyledHR = styled(HR)`
  margin-vertical: 0px;
`;

export const BoldLargeText = styled(LargeText)`
`;

export const BoldMediumText = styled(MediumText)`
  margin-vertical: 10px;
  padding-left: 5px;
`;

export const ItemsContainer = styled(FullRowContainer)`

`;

export const ButtonItemBox = styled(TouchableOpacity)`
  width: 100%;
  margin-left: 5%;
`;

export const ContainerBox = styled(FullRowContainer)`
  width: 90%;
`;

export const ButtonIconBox = styled.View`
  align-items: center;
  justify-content: center;
  width: 5%;
`;
