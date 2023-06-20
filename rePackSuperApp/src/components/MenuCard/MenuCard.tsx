import React from 'react';
import {
  MenuCardStyle,
  MenuInformation,
  MenuLabelText,
  IconStyle,
  SecondaryIconStyle,
  HR,
  MenuLabelSubText,
} from './MenuCard.css';
import { Image, PressableProps } from 'react-native';
import { FullRowContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';

export interface IMenuCardProps {
  testID?: string;
  iconImg: any;
  menuText: string | Element;
  menuSubtext?: string | Element;
  shadow?: boolean;
  secondaryIcon: any;
  onPressHandler: any;
}

export const MenuCard: React.FC<IMenuCardProps & PressableProps> = props => {
  const shadow = props.shadow === false ? false : true;
  const pressHandler = () => {
    return props.onPressHandler();
  };

  return (
    <>
      <MenuCardStyle shadow={shadow} testID={props.testID} onPress={pressHandler}>
        <FullRowContainer>
          <IconStyle>
            &nbsp;
            <Image source={props.iconImg} />
            &nbsp;
          </IconStyle>
          <MenuInformation>
            <MenuLabelText menuOption={props.menuText}>{props.menuText}</MenuLabelText>
            {props.menuSubtext && <MenuLabelSubText menuOption={props.menuText}>{props.menuSubtext}</MenuLabelSubText>}
          </MenuInformation>
          <SecondaryIconStyle>
            &nbsp;
            <Image source={props.secondaryIcon} />
            &nbsp;
          </SecondaryIconStyle>
        </FullRowContainer>
      </MenuCardStyle>
      {shadow === true && <HR />}
    </>
  );
};
