import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const CustomProgressBar = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  height: 5px;
  background-color: ${theme.ALERT_SUCCESS_BACKGROUND};
  width: 100%;
  border-radius: 8px;
  margin-vertical: 5px;
`;

export const SuccessUnit = styled.View`
  height: 5px;
  width: ${props => (props.successPerc ? props.successPerc : '0%')};
  background-color: ${theme.PRIMARY_COLOR};
`;

export const ErrorUnit = styled.View`
  height: 5px;
  width: ${props => (props.errorPerc ? props.errorPerc : '0%')};
  background-color: ${theme.ALERT_CRITICAL_COLOR};
`;
