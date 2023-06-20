import React from 'react';
import { PressableProps, Image } from 'react-native';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { FullRowContainer, BR, HR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import {
  Card,
  AdditionalText,
  BoldMediumLargeText,
  EmptyText,
  FirstData,
  GreenText,
  Header,
  Icon,
  Link,
  Title,
  InformationRow,
  LightMediumText,
  SecondData,
  TextContainer,
} from './PreviewCard.css';

export interface CardProps {
  testID?: string;
  icon: any;
  isLoading?: boolean;
  cardTitle: string;
  linkText: string;
  firstDataText?: string;
  firstData?: any;
  secondDataText?: string;
  secondData?: any;
  additionalText?: string;
  emptyText?: string;
  onPressHandler?: () => void;
}

export const PreviewCard: React.FC<CardProps & PressableProps> = ({ testID = 'pressable', ...props }) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const pressHandler = () => {
    if (!props.isLoading && props.onPressHandler) {
      return props.onPressHandler();
    }
  };

  return (
    <Card testID={testID} onPress={pressHandler}>
      <FullRowContainer>
        <Header>
          <Icon>
            <Image testID="icon" source={props.icon} />
          </Icon>
          <Link>{props.linkText !== '' && <GreenText testID="link">{props.linkText}</GreenText>}</Link>
        </Header>

        <Title testID="title">{props.cardTitle}</Title>

        <ShimmerPlaceholder visible={!props.isLoading} width={100}>
          {props.firstData && props.secondData ? (
            <TextContainer>
              <InformationRow>
                <FirstData>
                  <LightMediumText testID={'firstText'}>{props.firstDataText}</LightMediumText>
                  <BoldMediumLargeText testID={'firstValue'}>{props.firstData}</BoldMediumLargeText>
                </FirstData>

                <SecondData>
                  <LightMediumText testID={'secondText'}>{props.secondDataText}</LightMediumText>
                  <BoldMediumLargeText testID={'secondValue'}>{props.secondData}</BoldMediumLargeText>
                </SecondData>
              </InformationRow>

              {!!props.additionalText && <HR />}
              {!!props.additionalText && (
                <AdditionalText testID={'additionalText'}>{props.additionalText}</AdditionalText>
              )}
            </TextContainer>
          ) : (
            <TextContainer testID={testID}>
              {!!props.emptyText && <EmptyText testID={'emptyText'}>{props.emptyText}</EmptyText>}
            </TextContainer>
          )}
        </ShimmerPlaceholder>
        {props.isLoading ? (
          <>
            <BR />
            <ShimmerPlaceholder visible={!props.isLoading} width={130} />
            <BR />
            <ShimmerPlaceholder visible={!props.isLoading} width={240} />
          </>
        ) : null}
      </FullRowContainer>
    </Card>
  );
};
