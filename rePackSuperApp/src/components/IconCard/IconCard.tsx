import React from 'react';
import { Image } from 'react-native';
import { CenterContainer, MediumText, Card, IconCardContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export interface CardProps {
  testID?: string;
  iconImg?: any;
  iconText?: string;
  onPressHandler?: any;
  isLoading?: boolean;
}

export const IconCard: React.FC<CardProps> = ({ testID = 'pressableIT', ...props }) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <Card testID={testID} onPress={props.onPressHandler}>
      <ShimmerPlaceholder visible={!props.isLoading} width={100}>
        <IconCardContainer>
          <Image source={props.iconImg} />
          <CenterContainer>
            <MediumText testID="iconText">{props.iconText}</MediumText>
          </CenterContainer>
        </IconCardContainer>
      </ShimmerPlaceholder>
    </Card>
  );
};
