import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';

export const Card = styled.View`
  width: 100%;
  margin-bottom: 10px;
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  align-items: flex-end;
`;

export const InformationContainer = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row; 
  align-self: auto;
  text-align: right;
`;

export const TextContainer = styled.View`
  width: 95%;
`;

export const CardText = styled(MediumText)`
  font-size: ${theme.FONT_SIZE_MEDIUM};
  font-weight: 400;
  font-family: 'Noto Sans';
  font-style: normal;
  color: ${theme.GRAY};
`;

export const IconContainer = styled.Pressable`
margin-top: 1%;
`;
