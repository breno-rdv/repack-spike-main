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

export const InputContainer = styled.ScrollView`
	padding-top: 5%;
	width: ${theme.SCREEN_WIDTH}px;
	height: ${theme.SCREEN_HEIGHT}px;
	padding-left: 5%;
	padding-right: 5%;
`;

export const WhiteSpace = styled.View`
	height: ${theme.SCREEN_HEIGHT * 0.3}px;
`;

export const RequiredText = styled.Text`
  margin-left: 10px;
  color: ${theme.GRAY}
  font-size: ${theme.FONT_SIZE_SMALL};
  line-height: 16px;
`;

export const AddressRow = styled.View`
	padding-top: 3%;
	padding-bottom: 3%;
	flex-direction: row; 
`;

export const NumberContainer = styled.View`
	flex: 1;
	margin-right: 4%;
`;

export const DistrictContainer = styled.View`
	flex: 2;
`;

export const CityContainer = styled.View`
	flex: 2.5;
  margin-right: 4%;
`;

export const StateContainer = styled.View`
	flex: 1;
`;

export const ButtonContainer = styled.View`
	width: ${theme.SCREEN_WIDTH}px;
	flex: 1;
	justify-content: flex-end;
	margin-bottom: 0px;
`;

export const ContinueButton = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? theme.GRAY_COLOR_50 : theme.SECONDARY_COLOR)};
  margin-top: 10px;
  justify-content: center;
  height: ${theme.STANDARD_BUTTON_HEIGHT};
  width: 100%;
`;

export const ContinueButtonText = styled.Text`
  font-weight: 700;
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  text-align: center;
  color: ${theme.BLACK};
  line-height: 24px;
`;
