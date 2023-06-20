import styled, { css } from 'styled-components/native';
import { Card, CustomMediumText, FullRowContainer, HR, MediumText, SuperLargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { TouchableOpacity, View } from 'react-native';

export const CustomCard = styled(Card)`
  padding-top: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
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

export const BoldBlackText = styled(MediumText)`
  color: ${theme.BLACK};
  font-weight: bold;
  width: auto;
`;

export const BoldText = styled(CustomMediumText)`
  color: ${theme.GRAY_COLOR_800};
  font-weight: bold;
  width: auto;
`;

export const CustomGreyText = styled(CustomMediumText)`
  color: ${theme.GRAY_COLOR_800};
  width: auto;
`;

export const LightGreyText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_600};
  width: auto;
`;

export const GreyText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_800};
  width: auto;
`;

export const LargeBoldText = styled(SuperLargeText)`
  color: ${theme.GRAY_COLOR_900};
  font-weight: 700;
`;

export const HRInstallment = styled(HR)`
  width: ${theme.SCREEN_WIDTH}px;
  height: 3px;
  margin-vertical: 0px;
  border-color: ${theme.GRAY_COLOR_800};
  background-color: ${theme.GRAY_COLOR_800};

  ${props =>
    props.testID === 'overdueHR' &&
    css`
      border-color: ${theme.ALERT_CRITICAL_COLOR};
      background-color: ${theme.ALERT_CRITICAL_COLOR};
    `}

    ${props =>
      props.testID === 'payedHR' &&
      css`
      border-color: ${theme.PRIMARY_COLOR};
      background-color: ${theme.PRIMARY_COLOR};
    `}
`;

export const BoxMediumTextS = styled(MediumText)`
  width: 25%;
`;

export const BoxMediumTextM = styled(MediumText)`
  width: 30%;
`;

export const BoxMediumTextL = styled(MediumText)`
  width: 40%;
`;

export const BoxMediumText = styled(MediumText)`
  width: 33%;
`;

export const BoxMediumTextSGrey = styled(BoxMediumTextS)`
  color: ${theme.GRAY_COLOR_800};
`;

export const BoxMediumTextMGrey = styled(BoxMediumTextM)`
  color: ${theme.GRAY_COLOR_800};
`;

export const BoxMediumTextLGrey = styled(BoxMediumTextL)`
  color: ${theme.GRAY_COLOR_800};
`;

export const BoxMediumTextGrey = styled(BoxMediumText)`
  color: ${theme.GRAY_COLOR_800};
`;

export const JustifiedRowContainer = styled(FullRowContainer)`
  justify-content: space-between;
`;

export const JustifiedRowContainerMargin = styled(JustifiedRowContainer)`
  margin-vertical: 20px;
`;

export const MarginBox = styled.View`
  margin-vertical: 20px;
`;
