import React from 'react';
import { Card, BR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { AutoMediumText, BoldBlackText, GreyText, JustifiedRowContainer } from './Installment.css';
import { formatCurrency, formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { ProgressBar } from '../ProgressBar';

export interface ICardProps {
  testID?: string;
  financedValue: number;
  payedTotalAmount: number;
  overdueTotalAmount: number;
  openTotalAmount: number;
}

export const InstallmentDetailsCard: React.FC<ICardProps> = ({
  testID = 'installmentDetails',
  financedValue,
  payedTotalAmount,
  overdueTotalAmount,
  openTotalAmount,
}: ICardProps) => {
  const { locale } = useLocale();

  const newDate = new Date();
  const currentDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`;

  return (
    <Card testID={testID}>
      <GreyText>
        {translateWithFallback('DataUpdatedIn', 'Date updated in', locale)} {formatDate(currentDate, locale)}
      </GreyText>
      <BR />
      <BR />

      <JustifiedRowContainer>
        <BoldBlackText>{translateWithFallback('DisbursementAmount', 'Disbursement amount', locale)}:</BoldBlackText>
        <BoldBlackText>{formatCurrency(financedValue)}</BoldBlackText>
      </JustifiedRowContainer>

      <ProgressBar testID="progressBar" total={financedValue} success={payedTotalAmount} error={overdueTotalAmount} />
      <BR />
      <BR />

      <JustifiedRowContainer>
        <GreyText>{translateWithFallback('Paid', 'Paid', locale)}:</GreyText>
        <AutoMediumText>{formatCurrency(payedTotalAmount > 0 ? payedTotalAmount : 0)}</AutoMediumText>
      </JustifiedRowContainer>
      {overdueTotalAmount > 0 && (
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('Overdue', 'Overdue', locale)}:</GreyText>
          <AutoMediumText>{formatCurrency(overdueTotalAmount)}</AutoMediumText>
        </JustifiedRowContainer>
      )}
      <JustifiedRowContainer>
        <GreyText>{translateWithFallback('Open', 'Open', locale)}:</GreyText>
        <AutoMediumText>{formatCurrency(openTotalAmount > 0 ? openTotalAmount : 0)}</AutoMediumText>
      </JustifiedRowContainer>
    </Card>
  );
};
