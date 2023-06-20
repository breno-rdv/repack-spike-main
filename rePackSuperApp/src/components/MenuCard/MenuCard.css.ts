import styled from 'styled-components/native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export const MenuCardStyle = styled.Pressable<{ shadow: boolean }>`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  min-width: 100%;
  max-width: 100%;
  width: 100%;
  padding-vertical: 20px;
  padding-left: 20px;
  padding-right: 16px;
  
  background-color: ${theme.WHITE};
  ${props => {
    if (props.shadow === true)
      return `
        background-color: ${theme.WHITE};
        shadow-opacity: 0.15;
        shadow-radius: 2px;
        shadow-color: ${theme.BLACK};
        shadow-offset: 1px 4px;
        elevation: 2;
  `;
    else
      return `
        background-color: ${theme.WHITE};
        shadow-color: red;
        elevation: 0;
  `;
  }}
`;

export const IconStyle = styled.Text`
  color: ${theme.GRAY_COLOR_900};
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  font-weight: 600;
  font-family: Noto Sans;
  font-style: normal;
  width:10%;
`;

export const SecondaryIconStyle = styled.Text`
  flex: 1;
  align-self: center;
  text-align: right;
  color: ${theme.PRIMARY_COLOR};
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  font-weight: 600;
  font-family: Noto Sans;
  font-style: normal;
  width: auto;
  height: 100%;
`;

export const MenuInformation = styled.View`
`;

export const MenuLabelText = styled.Text`
  color: ${theme.GRAY_COLOR_900};
  font-size: ${theme.FONT_SIZE_CUSTOM_MEDIUM};
  font-weight: 600;
  font-family: Noto Sans;
  font-style: normal;
`;

export const MenuLabelSubText = styled.Text`
  color: ${theme.GRAY_COLOR_900};
  font-size: ${theme.FONT_SIZE_SMALL};
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  width: auto;
`;

export const HR = styled.View`
  height: 1px;
  background-color: ${theme.GRAY_COLOR_400};
  width: 100%;
`;
