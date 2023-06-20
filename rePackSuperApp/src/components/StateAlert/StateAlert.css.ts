import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const AlertContainer = styled.TouchableOpacity`
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-items: flex-start;
  justify-content: flex-start;
  position: absolute;
  width: ${theme.SCREEN_WIDTH}px;
  min-height: ${theme.SCREEN_HEIGHT / 10}px;
  z-index: 100;
  bottom: 0px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 5%;
  align-content: center;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 10px;
  max-width: 80%;
  align-content: center;
`;

export const SuccessAlert = styled(AlertContainer)`
  background-color: ${theme.ALERT_SUCCESS_BACKGROUND};
`;

export const WarningAlert = styled(AlertContainer)`
  background-color: ${theme.ALERT_WARNING_BACKGROUND};
`;

export const CriticalAlert = styled(AlertContainer)`
  background-color: ${theme.ALERT_CRITICAL_BACKGROUND};
`;

export const InfoAlert = styled(AlertContainer)`
  background-color: ${theme.ALERT_INFO_BACKGROUND};
`;
