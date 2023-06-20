import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { MediumLargeText, MediumText, ExtraLargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';

export const BoldMediumLargeText = styled(MediumLargeText)`
  font-weight: bold;
`;

export const GrayText = styled(MediumText)`
  color: ${theme.GRAY_COLOR_900};
`;

export const PrimaryBoldLargeText = styled(ExtraLargeText)`
  color: ${theme.PRIMARY_COLOR};
  line-height: 32px;
  font-weight: bold;
`;
