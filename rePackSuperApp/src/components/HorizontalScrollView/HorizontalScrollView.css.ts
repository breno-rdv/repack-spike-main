import styled from 'styled-components/native';
import { ScrollView, View } from 'react-native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { ExtraLargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';

export const Card = styled(View)`
  width: auto;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 0px;
  padding-horizontal: 0px;
  border-radius: 4px;
  background-color: ${theme.GRAY_COLOR_50}; 
`;

export const Information = styled(View)`
  padding-left: 20px;
  background-color: ${theme.GRAY_COLOR_50};
`;

export const HomeCardIcon = styled.View``;

export const HomeCardTitle = styled(ExtraLargeText)`
  font-weight: bold;
`;

export const Content = styled(View)`
  background-color: ${theme.GRAY_COLOR_50};
`;

export const CardScrollView = styled(ScrollView)`
  flex-direction: column; 
  align-self: center;
  text-align: right;
`;
