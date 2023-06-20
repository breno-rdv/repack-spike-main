import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React, { useCallback } from 'react';
import { Linking } from 'react-native';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import * as S from './EmptyStateScreen.css';

export interface EmptyStateScreenProps {
  emailBody: string;
  emailSubject: string;
  subtitle: string;
  title: string;
}

export const EmptyStateScreen: React.FC<EmptyStateScreenProps> = ({
  emailBody,
  emailSubject,
  title,
  subtitle,
}): JSX.Element => {
  const { locale } = useLocale();

  const handlePhonePress = useCallback(async () => {
    await Linking.openURL('tel:08007233464');
  }, []);

  const handleEmailPress = useCallback(async () => {
    await Linking.openURL(
      `mailto:BJD-FaleConosco@JohnDeere.com?subject=${encodeURI(emailSubject)}&body=${encodeURI(emailBody)}`
    );
  }, []);

  return (
    <S.EmptyStateContainer>
      <S.EmptyStateTitle testID="emptyStateScreenTitle">{title}</S.EmptyStateTitle>
      <S.EmptyStateDescription testID="emptyStateScreenSubtitle">{subtitle}</S.EmptyStateDescription>
      <S.EmptyStateDescription>
        {translateWithFallback('ContactUsTip', 'Do you have doubts? Contact us via CSC.', locale)}
      </S.EmptyStateDescription>
      <S.PhoneBoxInfo>
        <S.EmptyStateDescription>
          {translateWithFallback('FormContact', 'Contact us by phone:', locale)}
        </S.EmptyStateDescription>
        <S.GreenLinkPhone onPress={handlePhonePress} testID="emptyStateScreenPhone">
          0800 723 3464
        </S.GreenLinkPhone>
      </S.PhoneBoxInfo>
      <S.EmailBoxInfo>
        <S.EmptyStateDescription>
          {translateWithFallback('FormMessage', 'If you prefer, send us a message using the email below:', locale)}
        </S.EmptyStateDescription>
        <S.GreenLinkEmail onPress={handleEmailPress} testID="emptyStateScreenEmail">
          BJD-FaleConosco@JohnDeere.com
        </S.GreenLinkEmail>
      </S.EmailBoxInfo>
    </S.EmptyStateContainer>
  );
};
