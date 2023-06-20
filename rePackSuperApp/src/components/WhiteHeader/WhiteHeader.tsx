import React, { ReactElement } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { HeaderIconContainer, HeaderTitle, HeaderTitleContainer, WhiteHeaderContainer } from './WhiteHeader.css';

type WhiteHeaderProps = {
  action?: () => void;
  icon?: React.ReactNode;
  title: string;
};

export const WhiteHeader = ({ action, icon, title }: WhiteHeaderProps): ReactElement => {
  return (
    <WhiteHeaderContainer testID="white-header">
      <HeaderIconContainer>
        <TouchableOpacity onPress={action} testID="header-icon-touchable">
          <Image source={icon} />
        </TouchableOpacity>
      </HeaderIconContainer>
      <HeaderTitleContainer>
        <HeaderTitle testID="white-header-title">{title}</HeaderTitle>
      </HeaderTitleContainer>
    </WhiteHeaderContainer>
  );
};
