import * as React from 'react';
import { StatusBar, Linking } from 'react-native';
import dissatisfiedImage from '../../p1p3-mobile/src/assets/images/dissatisfied.png';
import { Warning } from '../Warning';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { Button } from '../Button';
import { Layout } from '../Layout';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { GreenLink, FormText, Title, Subtitle, Icon } from './Error.css';

export type ErrorProps = {
  hideButton?: boolean;
  hideErrorInstructions?: boolean;
  hideWarning?: boolean;
  onRefresh: any;
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
};

export const ErrorPage = ({
  hideButton,
  hideErrorInstructions,
  hideWarning,
  onRefresh,
  icon,
  title,
  subtitle,
}: ErrorProps): JSX.Element => {
  const { locale } = useLocale();
  const emailSubject = translateWithFallback('BottomContactUsEmailSubject', 'Banco John Deere - App Error', locale);
  const emailBody = translateWithFallback(
    'BottomContactUsEmailBody',
    'I got an error while using the app.\nError Description:\n Name:\n CPF/CNPJ:',
    locale
  );

  return (
    <Layout testID="errorPage">
      <StatusBar barStyle="light-content" />
      {!hideWarning && (
        <Warning description={translateWithFallback('Error', 'Error', locale)} icon={dissatisfiedImage} />
      )}
      {hideWarning && <Icon testID="error-page-icon" source={icon} />}
      {!!title && <Title>{title}</Title>}
      {!!subtitle && <Subtitle>{subtitle}</Subtitle>}
      {!hideButton && (
        <Button
          testID="error-page-try-again-button"
          text={translateWithFallback('TryAgain', 'Try again', locale)}
          onPress={() => {
            onRefresh();
          }}
        />
      )}
      {hideErrorInstructions && (
        <FormText testID="hide-instructions-contact-info">
          {translateWithFallback('FormContact', 'Contact us by phone:', locale)}
        </FormText>
      )}
      {!hideErrorInstructions && (
        <FormText>
          {'\n' +
            translateWithFallback('PersistsError', 'If the error persists', locale) +
            ', ' +
            translateWithFallback('FormContact', 'Contact us by phone:', locale).toLowerCase()}
        </FormText>
      )}
      <GreenLink onPress={() => Linking.openURL('tel:08007233464')}>0800 723 3464</GreenLink>
      <FormText>
        {translateWithFallback('FormMessage', 'If you prefer, send us a message using the email below:', locale)}
      </FormText>
      <GreenLink
        onPress={() =>
          Linking.openURL(
            `mailto:BJD-FaleConosco@JohnDeere.com?subject=${encodeURI(emailSubject)}&body=${encodeURI(emailBody)}`
          )
        }
      >
        BJD-FaleConosco@JohnDeere.com
      </GreenLink>
    </Layout>
  );
};
