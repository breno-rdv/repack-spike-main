import React from 'react';
import { Card, ColumnContainer, FullRowContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { CustomGreyText, LargeBoldText, LightGreyText, GreyText, JustifiedRowContainer } from './Installment.css';
import { formatCurrency, formatDate } from '@deere-jdf/p1p3-shared-libs-format';

export interface ICardProps {
  testID?: string;
  slipValue: number;
  dueDate: string;
}

export const NextInstallmentCard: React.FC<ICardProps> = ({
  testID = 'nextInstallment',
  slipValue,
  dueDate,
}: ICardProps) => {
  const { locale } = useLocale();

  return (
    <Card testID={testID}>
      <JustifiedRowContainer>
        <CustomGreyText>{translateWithFallback('NextInstallment', 'Next installment', locale)}</CustomGreyText>
        <ColumnContainer>
          <LightGreyText>{translateWithFallback('DueDate', 'Due date', locale)}:</LightGreyText>
          <GreyText>{formatDate(dueDate, locale)}</GreyText>
        </ColumnContainer>
      </JustifiedRowContainer>
      <FullRowContainer>
        <LargeBoldText>{formatCurrency(slipValue)}</LargeBoldText>
      </FullRowContainer>
    </Card>
  );
};
