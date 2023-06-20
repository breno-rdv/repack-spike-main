import styled from 'styled-components/native';
import { CustomMediumText, ExtraLargeText, MediumText, SmallText, SuperLargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const LightSmallText = styled(SmallText)`
  color: ${theme.GRAY_COLOR_800};
  font-size: ${theme.FONT_SIZE_SMALL};
`;

export const LargePrimaryBoldText = styled(SuperLargeText)`
  color: ${theme.PRIMARY_COLOR};
  font-weight: bold;
`;

export const Card = styled.View`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${theme.WHITE};
  border-radius: 10px;
`;

export const GreenCard = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${theme.PRIMARY_COLOR};
  padding: 0% 5% 5% 5%;
`;

export const AdditionalInformationView = styled.View`
  width: 45%;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export const AdditionalInformationTextView = styled.View`
  width: 55%;
  height: auto;
  justify-content: center;
`;

export const AdditionalInformationLine = styled.View`
  width: 100%;
  height: 1px;
  justify-content: center;
  margin-vertical: 3%;
  background-color: ${theme.WHITE};
  opacity: 0.5;
`;

export const AdditionalInformationButton = styled.TouchableOpacity`
  
`;

export const AdditionInformationTitle = styled.Text`
  color: ${theme.WHITE};
  font-size: ${theme.FONT_SIZE_MEDIUM};
`;

export const AdditionInformationSubTitle = styled.Text`
  color: ${theme.WHITE};
  font-size: ${theme.FONT_SIZE_SMALL};
  font-weight: ${theme.FONT_MEDIUM};
  opacity: 0.7
`;

export const AdditionalInformationText = styled.Text`
  width: 100%;
  height: auto;
  align-items: flex-end;
  text-align: right;
  color: ${theme.WHITE};
  font-size: ${theme.FONT_SIZE_DEFAULT_LARGE};
  font-weight: ${theme.FONT_BOLD}
`;

export const AdditionalInformationButtonText = styled.Text`
  color: ${theme.WHITE}
  text-decoration-line: underline;
  font-size: ${theme.FONT_SIZE_SMALL};
`;

export const LightMediumText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_800};
  font-family: 'Noto Sans';
  font-size: ${theme.FONT_SIZE_MEDIUM};
  font-style: normal;
  font-weight: 400;
`;

export const MainBoldLargeText = styled(ExtraLargeText)`
  margin-top: 4px;
  color: ${theme.PRIMARY_COLOR};
  font-style: normal;
  font-weight: bold;
  line-height: 33px;
`;

export const Line = styled.View`
  width: 150%;
  height: 1px;
  margin-vertical: 20px; 
  margin-horizontal: -20px;
  backgroundColor: ${theme.GRAY_COLOR_500};
`;

export const DataRow = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const FirstData = styled.View`
  min-width: 40%;
  max-width: 40%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SecondData = styled.View`
  min-width: 45%;
  max-width: 45%;
  margin-left:15%; 
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const NormalText = styled(MediumText)`
  color: ${theme.GRAY};
  font-family: 'Noto Sans';
  font-size: ${theme.FONT_SIZE_MEDIUM};
  font-style: normal;
  font-weight: 400;
  text-align: justify;
`;

export const ValueText = styled(CustomMediumText)`
  margin-top: 4px;
  margin-bottom: 20px;
  color: ${theme.GRAY_COLOR_27};
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  font-style: normal;
  font-weight: bold;
`;

export const TextRow = styled.View`
  width: 100%;
  flex-direction: row;
`;
