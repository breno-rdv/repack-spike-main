import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { BR, Card } from '../../../../../p1p3-mobile/src/assets/theme.css';
import {
  PrimaryBoldLargeText,
  GraySmallText,
  JustifiedRowContainer,
  BoldMediumText,
  GreyText,
  AutoMediumText,
  GreenText,
  GreenAutoMediumText,
} from './ContractDetailsCard.css';
import { formatCurrency, formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { IInstallmentData } from '../../../../../p1p3-mobile/src/services/ContractDetailsService/contractDetailsService';

export interface ICardProps {
  testID: string;
  contractNumber: number;
  adhesion: number;
  modality: string;
  issuanceDate: string;
  interestRate: number;
  totalInstallments: number;
  firstPrincipalDate: string;
  lastPrincipalDate: string;
  principalInstallmentPeriod: number;
  financedValue: number;
  installments: IInstallmentData[];
  nextDueDate?: string;
}

export const ContractDetailsCard: React.FC<ICardProps> = ({ ...props }) => {
  const { locale } = useLocale();

  const getParsedInterest = (unparsedInterestRate: number) => {
    return unparsedInterestRate.toFixed(1);
  };

  const getPaymentFrequency = (frequency: number) => {
    let paymentFrequency: string;
    if (frequency <= 0 || isNaN(frequency)) {
      paymentFrequency = translateWithFallback('Unavailable', 'Unavailable', locale);
    } else if (frequency === 1) {
      paymentFrequency = translateWithFallback('Monthly', 'Monthly', locale);
    } else if (frequency === 12) {
      paymentFrequency = translateWithFallback('Yearly', 'Yearly', locale);
    } else {
      const prefix = translateWithFallback('Every', 'Every', locale);
      const suffix = translateWithFallback('months', 'months', locale);
      paymentFrequency = `${prefix} ${frequency} ${suffix}`;
    }
    return paymentFrequency;
  };

  return (
    <>
      <Card testID={props.testID}>
        <GraySmallText testID="headerInfo">{translateWithFallback('Contract', 'Contract', locale)}:</GraySmallText>
        <PrimaryBoldLargeText>
          {props.contractNumber}/{props.adhesion}
        </PrimaryBoldLargeText>
        <BR />
        <JustifiedRowContainer>
          <BoldMediumText>{translateWithFallback('DisbursementAmount', 'Disbursement amount', locale)}:</BoldMediumText>
          <BoldMediumText>{formatCurrency(props.financedValue)}</BoldMediumText>
        </JustifiedRowContainer>
        <BR />
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('Modality', 'Modality', locale)}:</GreyText>
          <AutoMediumText>{props.modality}</AutoMediumText>
        </JustifiedRowContainer>
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('AnnualFee', 'Annual fee', locale)}:</GreyText>
          <AutoMediumText>{`${getParsedInterest(props.interestRate)}%`}</AutoMediumText>
        </JustifiedRowContainer>
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('TotalInstallments', 'Total installments', locale)}:</GreyText>
          <AutoMediumText>{props.totalInstallments}</AutoMediumText>
        </JustifiedRowContainer>
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('PaymentFrequency', 'Payment frequency', locale)}:</GreyText>
          <AutoMediumText testID={'PaymentFrequency'}>
            {getPaymentFrequency(props.principalInstallmentPeriod)}
          </AutoMediumText>
        </JustifiedRowContainer>
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('IssuanceDate', 'Issuance date', locale)}:</GreyText>
          <AutoMediumText>{formatDate(props.issuanceDate, locale)}</AutoMediumText>
        </JustifiedRowContainer>
        <BR />
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('FirstDueDate', 'First due date', locale)}:</GreyText>
          <AutoMediumText>{formatDate(props.firstPrincipalDate, locale)}</AutoMediumText>
        </JustifiedRowContainer>
        <JustifiedRowContainer>
          <GreyText>{translateWithFallback('LastDueDate', 'Last due date', locale)}:</GreyText>
          <AutoMediumText>{formatDate(props.lastPrincipalDate, locale)}</AutoMediumText>
        </JustifiedRowContainer>
        <BR />
        {props.nextDueDate != '' && (
          <JustifiedRowContainer>
            <GreenText>{translateWithFallback('NextDueDate', 'Next due date:', locale)}</GreenText>
            <GreenAutoMediumText>{formatDate(props.nextDueDate, locale)}</GreenAutoMediumText>
          </JustifiedRowContainer>
        )}
      </Card>
    </>
  );
};
