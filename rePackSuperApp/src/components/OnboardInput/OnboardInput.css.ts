import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const TitleText = styled.Text`
	color: ${theme.GRAY_COLOR_900};
	font-style: normal;
	font-weight: 700;
  text-align: left;
  align-self: flex-start;
  margin-left: 5%;
  margin-right: 5%;
	line-height: 28px;
	font-size: ${theme.FONT_SIZE_LARGE};
`;

export const InputContainer = styled.View`
  width: 90%;
	padding-top: ${theme.IS_SMALL_PHONE ? '1%' : '8%'};
	align-self: center;
  justify-content: flex-end;
`;

export const WarningText = styled.Text`
	margin-top: 5px;
	margin-left: 10px;
  color: ${theme.GRAY}
  font-size: ${theme.FONT_SIZE_SMALL};
	line-height: 16px;
`;

export const RequiredText = styled.Text`
  font-weight: 400;
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  align-items: flex-end;
  line-height: 28px;
  color: ${theme.GRAY};
`;

export const ButtonContainer = styled.View`
	width: ${theme.SCREEN_WIDTH}px;
  flex: 1;
  justify-content: flex-end;
  margin-bottom: 0px;
`;

export const ContinueButtonText = styled.Text`
  font-weight: 700;
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  text-align: center;
  color: ${theme.BLACK};
  line-height: 24px;
`;

export const ErrorText = styled.Text`
  margin-top: 5px;
  margin-left: 10px;
  color: ${theme.ALERT_CRITICAL_COLOR};
  font-size: ${theme.FONT_SIZE_SMALL};
  line-height: 16px;
  font-weight: 700;
`;
