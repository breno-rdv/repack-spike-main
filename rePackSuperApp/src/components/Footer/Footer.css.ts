import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { SmallText } from '../../../../../p1p3-mobile/src/assets/theme.css';

export const Card = styled.View`
  width: 90%;
  flex-direction: row;
  flex-wrap: nowrap;
  display: flex;
  margin-right: 10%;
  margin-vertical: 5%;
  align-items: flex-end;
`;

export const FooterText = styled(SmallText)`
  font-size: ${theme.FONT_SIZE_SMALL};
  font-weight: bold;
  font-family: 'Noto Sans';
  font-style: normal;
  color: ${theme.TERTIARY_COLOR};
`;
