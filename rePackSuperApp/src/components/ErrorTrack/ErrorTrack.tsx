import React from 'react';
import { Image } from 'react-native';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { Button } from '../Button';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';

import dissatisfiedImage from '../../../../../p1p3-mobile/src/assets/icons/onboard/very_dissatisfied.png';
import { BoldText, NormalText, Container, ButtonContainer } from './ErrorTrack.css';

export interface ErrorProps {
  onRefresh: any;
  isLoading?: boolean;
}

export const ErrorTrack: React.FC<ErrorProps> = props => {
  const { locale } = useLocale();

  return (
    <Container>
      <Image source={dissatisfiedImage} />
      <BoldText>{translateWithFallback('SomethingWentWrong1', 'Looks like something went wrong', locale)}</BoldText>
      <NormalText>
        {translateWithFallback('SomethingWentWrong2', 'We apologize, something went wrong.', locale)}
      </NormalText>
      <NormalText>{translateWithFallback('TryAgainLater', 'Try again later.', locale)}</NormalText>
      <ButtonContainer>
        <Button
          testID="TryAgain"
          text={translateWithFallback('TryAgain', 'Try again', locale)}
          loading={props.isLoading}
          boldText
          onPress={props.onRefresh}
        />
      </ButtonContainer>
    </Container>
  );
};
