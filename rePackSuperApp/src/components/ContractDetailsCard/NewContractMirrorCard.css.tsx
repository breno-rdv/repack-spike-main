import styled from 'styled-components/native';
import { CardNoShadow, CustomMediumText, FullRowContainer, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { Status } from './NewContractMirrorTable';

const handleColorType = status => {
  switch (status) {
    case Status.OPEN:
      return theme.BLUE_COLOR_1;
    case Status.PAYED:
      return theme.GREEN_COLOR_1;
    case Status.LATE:
      return theme.RED_COLOR_1;
    default:
      return theme.GRAY_COLOR_500;
  }
};

export const CustomCard = styled(CardNoShadow)`
  margin-top:16px;
  border-radius: 4px;
  border-left-color: ${props => handleColorType(props.status)}
  border-left-width:4px;
  padding-top:0px;
  padding-bottom:0px;
  margin-bottom:0px;
`;

export const BoldText = styled(CustomMediumText)`
  color: ${theme.GRAY_COLOR_1000};
  width: auto;
  font-weight: bold;
  font-weight: 700;
  line-height: 22px;
  padding-left:12px;
`;

export const NormalMediumText = styled(MediumText)`
  color: ${theme.GRAY};
  font-weight: 400;
  line-height: 19px;
  width:auto;
  padding-top:4px;
  padding-bottom:4px;
`;

export const CustomContainer = styled(FullRowContainer)`
  padding: 16px;
`;

export const InstallmentContainer = styled(FullRowContainer)`  
  margin-bottom:8px;
`;

export const InfoRowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items:center;
`;

export const GrayLine = styled.View`
  border-width:0.5px;
  border-color:${theme.GRAY_COLOR_500};
  width:100%;
`;

export const ContainerBox = styled(FullRowContainer)`
  width:auto;
`;

export const LeftBoxMediumText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_800}; 
  font-weight: 400;
  line-height: 19px;
  margin-top:8px;
  flex:1
  text-align: left
`;

export const CenterBoxMediumText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_800}; 
  font-weight: 400;
  line-height: 19px;
  margin-top:8px;
  flex:1
  text-align: center
`;

export const RigthBoxMediumText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_800}; 
  font-weight: 400;
  line-height: 19px;
  margin-top:8px;
  flex:1
  text-align: right
`;

export const LeftBoxMediumTextGray = styled(MediumText)`
  color: ${theme.GRAY_COLOR_1000}; 
  font-weight: 500;
  line-height: 19px;
  text-align: left
  flex:1
`;

export const CenterBoxMediumTextGray = styled(MediumText)`
  color: ${theme.GRAY_COLOR_1000}; 
  font-weight: 500;
  line-height: 19px;
  text-align: center
  flex:1
`;

export const RigthBoxMediumTextGray = styled(MediumText)`
  color: ${theme.GRAY_COLOR_1000}; 
  font-weight: 500;
  line-height: 19px;
  text-align: right
  flex:1
`;

export const GreenLink = styled.TouchableOpacity`
	height: 27px;
	width: 100%;
	justify-content:flex-end
`;

export const GreenText = styled.Text`
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	color: ${theme.PRIMARY_COLOR};
	text-decoration-line: underline;
`;
