import React from 'react';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { Button } from '../Button';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { Card, CenterContainer, FullRowContainer, MediumText } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { ErrorMessage } from './Error.css';
import { Image } from 'react-native';

export interface ErrorProps {
  testID?: string;
  iconImg?: any;
  iconText?: string;
  onRefresh?: any;
}

export const ErrorCard: React.FC<ErrorProps> = props => {
  const { locale } = useLocale();

  return (
    <Card testID={props.testID}>
      <FullRowContainer>
        <Image source={props.iconImg} />
        <CenterContainer>
          <MediumText testID="iconText">{props.iconText}</MediumText>
        </CenterContainer>
      </FullRowContainer>
      <ErrorMessage>
        {translateWithFallback('ErrorSimple', 'Oops, something went wrong, try again.', locale)}
      </ErrorMessage>
      <Button testID="TryAgain" text={translateWithFallback('Reload', 'Reload', locale)} onPress={props.onRefresh} />
    </Card>
  );
};
