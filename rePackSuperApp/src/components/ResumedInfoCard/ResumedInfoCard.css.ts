import styled from 'styled-components/native';
import {
  FullRowContainer,
  CustomMediumText,
  ExtraLargeText,
  MediumText,
  SmallText,
  CardNoShadow,
} from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const CardContainer = styled(FullRowContainer)`
	margin-bottom: 20px;
`;

export const Card = styled(CardNoShadow)`
	margin-bottom: 0;
`;

export const PaddingView = styled.View`
	flex-direction: row;
	flex-wrap: wrap;
	min-width: 100%;
	max-width: 100%;
	justify-content: space-between;

	padding-left: 20px;
	padding-right: 20px;
`;

export const LinkSmallText = styled(SmallText)`
	font-weight: 500;
	text-decoration-line: underline;
	color: ${theme.PRIMARY_COLOR};
	width: auto;
`;

export const LinkSmallTextPadding = styled(SmallText)`
	font-weight: 500;
	text-decoration-line: underline;
	color: ${theme.PRIMARY_COLOR};
	width: auto;
	padding-vertical: 5px;
`;

export const SmallTextButton = styled.TouchableOpacity`
`;

export const BoldCustomMediumText = styled(CustomMediumText)`
	font-weight: bold;
	width: auto;
`;

export const BoldExtraLargeText = styled(ExtraLargeText)`
	font-weight: bold;
	width: auto;
`;

export const LightMediumText = styled(MediumText)`
	width: auto;
`;

export const LightMediumTextPadding = styled(MediumText)`
	width: auto;
`;

export const BoldText = styled(MediumText)`
  font-weight: 700;
`;

export const TextColumnContainer = styled.View`
  flex-direction: column;
  flex-wrap: wrap;
  align-self: center;
`;

export const InfoMessageContainer = styled(FullRowContainer)`
	background: ${theme.SUCCESS_INFO_BACKGROUD};
	padding: 5px 10px;
`;
