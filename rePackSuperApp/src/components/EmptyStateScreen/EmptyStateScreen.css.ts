import styled from 'styled-components/native';
import { ExtraLargeText, CustomMediumText, LargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const EmptyStateContainer = styled.View`
  flex-grow: 1;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	width: 100%;
`;

export const EmptyStateTitle = styled(ExtraLargeText)`
	font-weight: ${theme.FONT_BOLD};
	color: ${theme.GRAY_COLOR_27};
  margin-bottom: 5%;
`;

export const EmptyStateDescription = styled(CustomMediumText)`
	font-family: ${theme.FONT_FAMILY};
	font-style: normal;
	line-height: 22px;
	color: ${theme.GRAY};
  margin-bottom: 7%;
`;

export const PhoneBoxInfo = styled.View`
	width: 100%;
	margin-top: 10px;
`;

export const GreenLinkPhone = styled(LargeText)`
	color: ${theme.PRIMARY_COLOR};
	font-weight: ${theme.FONT_BOLD};
	text-decoration: none;
	margin-bottom: 10%;
`;

export const EmailBoxInfo = styled.View`
	width: 100%;
`;

export const GreenLinkEmail = styled(LargeText)`
  color: ${theme.PRIMARY_COLOR};
  font-weight: ${theme.FONT_BOLD};
  text-decoration: none;
  margin-bottom: 5%;
`;
