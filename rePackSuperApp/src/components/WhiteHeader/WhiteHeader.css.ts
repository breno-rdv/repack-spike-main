import { Dimensions, Platform } from 'react-native';
import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { AppText, MediumLargeText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { FONT_SIZE_CUSTOM_MEDIUM } from '../../../../../p1p3-mobile/src/assets/variables.css';

export const WhiteHeaderContainer = styled.View`
	display: flex;
	width: ${Dimensions.get('window').width}px;
	padding: ${Platform.OS ? 16 : 0}px;
`;

export const HeaderIconContainer = styled.View`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	width: 100%;
`;

export const HeaderTitleContainer = styled.View`
	display: flex;
	width: 100%;
`;

export const HeaderTitle = styled(AppText)`
	font-size: ${theme.IS_SMALL_PHONE ? theme.FONT_SIZE_CUSTOM_MEDIUM : theme.FONT_SIZE_MEDIUM_LARGE};
	color: ${theme.BLACK};
	font-weight: ${theme.FONT_BOLD};
`;

export const HeaderIcon = styled.TouchableOpacity`
	font-size: ${theme.FONT_SIZE_DEFAULT_LARGE};
`;
