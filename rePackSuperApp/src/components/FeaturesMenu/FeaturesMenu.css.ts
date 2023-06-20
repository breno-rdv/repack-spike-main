import styled from 'styled-components/native';
import { ExtraLargeText, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const GrayLine = styled.View`
  border-width: 0.5px
  border-color: ${theme.GRAY};
  width:100%;
  margin-bottom:1px;
`;

export const Greenline = styled.View`
  background-color:${theme.PRIMARY_COLOR};
  height:3px;
  border-width: 0.5px
  border-radius: 100px;
  border-color: ${theme.PRIMARY_COLOR};
  width:100%;
`;

export const MenuButton = styled.TouchableOpacity`
  align-items: center;
  height: 30px;
  flex:1;
`;

export const ShimmerContainer = styled.View`
  margin-top: 5px;  
  margin-bottom: 30px;
`;

export const NoPaddingContainer = styled.View`
  flex-direction: row;
  width: ${theme.SCREEN_WIDTH + 'px'}; 
  margin-left:-25px;
`;

export const PrimaryText = styled(ExtraLargeText)`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${theme.GRAY_COLOR_1000}
  margin-top: 5px;  
  margin-bottom: 20px;
  letter-spacing: 0.6px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const SecondaryText = styled(MediumText)`
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: ${theme.GRAY}
  width:auto;
`;

export const SecondaryGreenText = styled(MediumText)`
  font-style: normal;
  font-weight: 700;
  line-height: 19px;
  color: ${theme.PRIMARY_COLOR}
  width:auto;
  flex:1;
`;

export const SecondaryMenuText = styled(MediumText)`
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  color: ${theme.GRAY}
  width:auto;
  flex:1;
`;
