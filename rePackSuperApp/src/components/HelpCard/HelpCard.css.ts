import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { MediumText, CustomMediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';

export const Card = styled.Pressable`
  width: 240px;
  height: 170px;
  flex-wrap: wrap;
  flex-direction: row;
  margin-left: 0;
  margin-right: ${props => (props.isLastElement === false ? `0px` : `2%`)};
  padding-horizontal: 5%;
  padding-top: 5%;
  background-color: ${theme.WHITE};
	border-radius: 4px;
`;

export const CardTitle = styled(CustomMediumText)`
  width: 100%;
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  font-weight: bold;
  color: ${theme.GRAY_COLOR_900};
`;

export const CardContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5%;
`;

export const CardTextContainer = styled.View`
  width: 100%;
  height: 40%;
  flex-wrap: wrap;
`;

export const CardText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_650};
  font-size: ${theme.FONT_SIZE_MEDIUM};
  font-weight: bold;
`;

export const ButtonContainer = styled.View`
	width: 117px;
  height: 40px;
  flex-wrap: wrap;
  margin-vertical: 5%;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: ${theme.SECONDARY_COLOR};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-weight: 700;
  font-size: ${theme.FONT_SIZE_SMALL};
  text-align: center;
  color: ${theme.BLACK};
`;
