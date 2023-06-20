import React from 'react';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { FormTextGray, TitleBold, FullWidthContainer } from './Error.css';
import { ContactUsLink } from '../ContactUs';

export interface JudicialErrorProps {
  errorTitle: string;
  errorSubtitle: string;
  emailSubject: string;
  emailBody: string;
}

export const JudicialErrorPage: React.FC<JudicialErrorProps> = ({
  errorTitle,
  errorSubtitle,
  emailBody,
  emailSubject,
}: JudicialErrorProps) => {
  const { locale } = useLocale();

  return (
    <FullWidthContainer testID="judicialErrorPage">
      <TitleBold testID="errorTitle">{errorTitle}</TitleBold>
      <FormTextGray testID="errorSubtitle">{errorSubtitle}</FormTextGray>
      <ContactUsLink textMessage={'0800 723 3464'} sceneName={'JudicialError'} />
      <FormTextGray>
        {translateWithFallback('FormMessage', 'If you prefer, send us a message using the email below:', locale)}
      </FormTextGray>
      <ContactUsLink
        textMessage={'BJD-FaleConosco@JohnDeere.com'}
        sceneName={'JudicialError'}
        email
        emailSubject={emailSubject}
        emailBody={emailBody}
      />
    </FullWidthContainer>
  );
};
