import styled from 'styled-components/native';
import {
  CustomMediumText,
  ExtraLargeText,
  FullRowContainer,
  MediumText,
  SmallText,
  SuperLargeText,
} from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { TouchableOpacity, View } from 'react-native';

export const PrimaryBoldLargeText = styled(ExtraLargeText)`
   color: ${theme.PRIMARY_COLOR};
   line-height: 32px;
   font-weight: bold;
 `;

export const GraySmallText = styled(SmallText)`
   color: ${theme.GRAY_COLOR_800};
 `;

export const CustomContainer = styled(FullRowContainer)`
  padding-left: 20px;
  margin-vertical: 20px;
`;

export const ContainerBox = styled(FullRowContainer)`
  width: 90%;
`;

export const ButtonIconBox = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  width: 10%;
`;

export const IconBox = styled(View)`
  align-items: center;
  justify-content: center;
`;

export const AutoMediumText = styled(MediumText)`
  width: auto;
`;

export const GreenAutoMediumText = styled(MediumText)`
color: ${theme.PRIMARY_COLOR};
  width: auto;
`;

export const BoldText = styled(CustomMediumText)`
  color: ${theme.GRAY_COLOR_800};
  font-weight: bold;
  width: auto;
`;

export const LightGreyText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_600};
  width: auto;
`;

export const GreyText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_800};
  width: auto;
  line-height: 16px;
`;

export const GreenText = styled(MediumText)`
  color: ${theme.PRIMARY_COLOR};
  width: auto;
  line-height: 16px;
`;

export const LargeBoldText = styled(SuperLargeText)`
  color: ${theme.GRAY_COLOR_900};
  font-weight: 700;
`;

export const JustifiedRowContainer = styled(FullRowContainer)`
	flex-direction: row;
  justify-content: space-between;
`;

export const BoldMediumText = styled(CustomMediumText)`
	width: auto;
  font-weight: bold;
  line-height: 20px;
`;

export const MarginBox = styled.View`
  margin-vertical: 20px;
`;
