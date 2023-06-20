import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { SmallText, MediumText, LargeText, ExtraLargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';

export const Card = styled.Pressable`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 4px;
  background-color: ${theme.WHITE};
`;

export const Header = styled.View`
  flex-direction: row; 
`;

export const Icon = styled.View`
  margin-bottom: 10px;
`;

export const Link = styled.View`
  flex: 1;
`;

export const GreenText = styled.Text`
  min-width: 100%;
  max-width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  text-align: right;
  text-decoration-line: underline;
  color: ${theme.PRIMARY_COLOR};
`;

export const Title = styled(ExtraLargeText)`
  font-weight: bold;
  margin-bottom: 2%;
`;

export const TextContainer = styled.View`
  max-width: auto;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
`;

export const InformationRow = styled.View`
  width: 100%;
  flex-direction: row; 
  margin-right: 5%;
  margin-top: 5%;
  align-self: center;
  text-align: right;
`;

export const FirstData = styled.View`
  min-width: 45%;
  max-width: 45%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const SecondData = styled.View`
  min-width: 50%;
  max-width: 50%;
  margin-left:5%; 
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const LightMediumText = styled(MediumText)`
  font-size: ${theme.FONT_SIZE_MEDIUM};
  color: ${theme.GRAY_COLOR_650};
`;

export const BoldMediumLargeText = styled(LargeText)`
  font-weight: bold;
  flex-wrap: wrap;
`;

export const AdditionalText = styled(SmallText)`
  font-size: ${theme.FONT_SIZE_SMALL};
  color: ${theme.GRAY_COLOR_650};
`;

export const EmptyText = styled(SmallText)`
  padding-vertical: 16px;
  padding-right: 16px;
  color: ${theme.GRAY_COLOR_650};
  font-size: ${theme.FONT_SIZE_SMALL};
`;
