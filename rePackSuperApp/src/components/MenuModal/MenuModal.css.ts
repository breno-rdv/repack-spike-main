import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import { View, ScrollView } from 'react-native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const MenuScrollView = styled(ScrollView)``;

export const MenuModalView = styled(View)`
  padding-top: 0px;
  margin: 0px;
  padding-bottom: 0px;
`;

export const MenuModal = styled(Modal)`
  margin:0px;
  margin-top:${props => props.headerHeight + 'px'};
  justify-content:flex-start;
  padding:0px;
  background-color: ${theme.GRAY_COLOR_50}
`;
