import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';
import { Description, WarningContainer } from './Warning.css';

export interface WarningProps {
  description: string;
  icon: ImageSourcePropType;
}

export const Warning: React.FC<WarningProps> = props => {
  return (
    <WarningContainer>
      <Description testID="description">{props.description}</Description>
      <Image testID="icon" source={props.icon} />
    </WarningContainer>
  );
};
