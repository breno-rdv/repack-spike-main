import styled from 'styled-components/native';
import { CustomMediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const ModalView = styled.View`
	background-color: ${theme.WHITE};
	width: 100%;
	padding: 8px 20px 20px 20px;
	border-radius: 4px;
	position: absolute;
	bottom: 0px;
`;

export const OverlayView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: rgba(0,0,0,0.6);
 `;

export const ExitIconView = styled.TouchableOpacity`
	margin-top: 6px;
	align-self: flex-start;
	height: 25px;
	width: 25px;
	justify-content: center;
`;

export const ImageView = styled.View`
	justify-content: center;
	align-items: center;
	padding-right: 5px;
`;

export const ButtonContainer = styled.View`
	justify-content: space-between;
	padding-bottom: 3%;
`;

export const CloseImage = styled.Image`
	width: 25px;
	height: 25px;
	resize-mode: contain;
	align-self: center;
`;
export const FilterRow = styled.View`
	flex-direction: row;
	padding-top: 10px;
`;

export const FilterText = styled.Text`
	font-size: ${theme.FONT_SIZE_MEDIUM};
	font-family: ${theme.FONT_FAMILY};
	color: ${theme.GRAY_COLOR_800};
`;

export const FilterButton = styled.TouchableOpacity`
	border-color: ${theme.PRIMARY_COLOR};
	border-width: 1px;
	border-radius: 4px;
	justify-content: center;
	align-items: center;
	padding: 6px 16px;
	margin: 4px;
	background-color: ${props => props.backgroundColor};
`;

export const FilterButtonText = styled(CustomMediumText)`
	color: ${props => props.color};
`;

export const HeaderView = styled.View`
	flex-direction: row;
	justify-content: space-between;
	padding-bottom: 20px;
`;
export const HeaderColumn = styled.View`
	flex-direction: column;
`;
export const GreenLink = styled.Text`
	color: ${theme.PRIMARY_COLOR};
	font-weight: 500;
	font-size: ${theme.FONT_SIZE_MEDIUM};
	font-family: ${theme.FONT_FAMILY};
	text-decoration: underline;
	text-decoration-color: ${theme.PRIMARY_COLOR};
	margin-top: 10px;
	margin-bottom: 30px;
	align-self: flex-start;
`;
