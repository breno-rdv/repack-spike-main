import React from 'react';
import { Image, PressableProps } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { BR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { Card, InformationContainer, TextContainer, CardText, IconContainer } from './UpdateInfo.css';

export interface CardProps {
  testID?: string;
  icon: any;
  text: string;
  value: any;
  isLoading: boolean;
  onPressHandler?: any;
}

export const UpdateInfo: React.FC<CardProps & PressableProps> = ({ ...props }) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);
  const information = props.text + props.value;

  return (
    <Card testID={props.testID}>
      <ShimmerPlaceholder visible={!props.isLoading} width={100}>
        <InformationContainer>
          <TextContainer>
            <CardText testID="text">{information}</CardText>
          </TextContainer>
          <IconContainer onPress={props.onPressHandler}>
            <Image testID="icon" source={props.icon} />
          </IconContainer>
        </InformationContainer>
      </ShimmerPlaceholder>
      {props.isLoading ? (
        <>
          <BR />
          <ShimmerPlaceholder visible={!props.isLoading} width={130} />
          <BR />
          <ShimmerPlaceholder visible={!props.isLoading} width={240} />
        </>
      ) : null}
    </Card>
  );
};
