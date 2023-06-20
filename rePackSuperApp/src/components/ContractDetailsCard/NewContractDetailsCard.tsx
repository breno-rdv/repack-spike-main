import { formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import {
  BoldMediumGrayText,
  Card,
  CardTransparentHeader,
  EightPixelsView,
  CardLine,
  InfoRowContainer,
  NormalMediumBlackText,
  NormalMediumText,
  NormalMediumFullText,
  BoldMediumGrayFullText,
  EquipmentContainer,
  MarginNormalMediumText,
  CardWithBottomMargin,
} from '../../../../../p1p3-mobile/src/scenes/ContractDetailsScene/ContractDetailsScene.css';
import { IContractInfo, IEquipmentInfo } from '../../../../../p1p3-mobile/src/services/ContractService/newContractService';
import { formatAnnualFee } from '../../../../../p1p3-mobile/src/managers/CurrencyMask';

export interface ICardProps {
  testID: string;
  contractNumber: string;
  contractDetails: IContractInfo;
  contractEquipment: IEquipmentInfo;
}

const indexHandler = (monetaryAcronym, basicRateAcronym) => {
  if (monetaryAcronym && basicRateAcronym) {
    return monetaryAcronym + ' / ' + basicRateAcronym;
  } else if (monetaryAcronym) {
    return monetaryAcronym;
  } else if (basicRateAcronym) {
    return basicRateAcronym;
  }
};

export const NewContractDetailsCard: React.FC<ICardProps> = ({
  testID,
  contractNumber,
  contractDetails,
  contractEquipment,
}) => {
  const { locale } = useLocale();

  return (
    <>
      <CardTransparentHeader>
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('UpdateAt', 'Update at', locale)}:</NormalMediumText>
          <NormalMediumBlackText>{formatDate(contractDetails.updatedAt, locale)}</NormalMediumBlackText>
        </InfoRowContainer>
      </CardTransparentHeader>

      <Card>
        <NormalMediumFullText>{translateWithFallback('Modality', 'Modality', locale)}</NormalMediumFullText>
        <CardLine />
        <NormalMediumBlackText>{contractDetails.modalityDescription}</NormalMediumBlackText>
      </Card>

      <Card>
        <NormalMediumFullText>{translateWithFallback('Details', 'Details', locale)}</NormalMediumFullText>
        <CardLine />
        <InfoRowContainer>
          <NormalMediumText>
            {translateWithFallback('InterestRatePerYear', 'Interest rate p.a.', locale)}:
          </NormalMediumText>
          <NormalMediumBlackText>
            {contractDetails.annualFeePercentage ? formatAnnualFee(contractDetails.annualFeePercentage) + '%' : '-'}
          </NormalMediumBlackText>
        </InfoRowContainer>
        <EightPixelsView />
        {(contractDetails.monetaryAcronym || contractDetails.basicRateAcronym) && (
          <>
            <InfoRowContainer>
              <NormalMediumText>{translateWithFallback('Indexes', 'Indexes', locale)}:</NormalMediumText>
              <NormalMediumBlackText>
                {indexHandler(contractDetails.monetaryAcronym, contractDetails.basicRateAcronym)}
              </NormalMediumBlackText>
            </InfoRowContainer>
            <EightPixelsView />
          </>
        )}
        <InfoRowContainer>
          <NormalMediumText>
            {translateWithFallback('TotalInstallments', 'Total installments', locale)}:
          </NormalMediumText>
          <NormalMediumBlackText>{contractDetails.totalInstallments}</NormalMediumBlackText>
        </InfoRowContainer>
        <EightPixelsView />
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('PaymentFrequency', 'Payment frequency', locale)}:</NormalMediumText>
          <NormalMediumBlackText>
            {contractDetails.paymentFrequency
              ? translateWithFallback(contractDetails.paymentFrequency, contractDetails.paymentFrequency, locale)
              : '-'}
          </NormalMediumBlackText>
        </InfoRowContainer>
        <EightPixelsView />
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('ReleaseDate', 'Release date', locale)}:</NormalMediumText>
          <NormalMediumBlackText>{formatDate(contractDetails.disbursementDate, locale)}</NormalMediumBlackText>
        </InfoRowContainer>
      </Card>

      {contractDetails.dealer && (
        <Card>
          <NormalMediumFullText>{translateWithFallback('Dealer', 'Dealer', locale)}</NormalMediumFullText>
          <CardLine />
          <NormalMediumBlackText>{contractDetails.dealer.name}</NormalMediumBlackText>
        </Card>
      )}

      <Card>
        <NormalMediumFullText>{translateWithFallback('Maturities', 'Maturities', locale)}</NormalMediumFullText>
        <CardLine />
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('FirstDueDate', 'First due date', locale)}:</NormalMediumText>
          <NormalMediumBlackText>
            {contractDetails.firstInstallmentDueDate
              ? formatDate(contractDetails.firstInstallmentDueDate, locale)
              : '-'}
          </NormalMediumBlackText>
        </InfoRowContainer>
        <EightPixelsView />
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('LastDueDate', 'Last due date', locale)}:</NormalMediumText>
          <NormalMediumBlackText>
            {contractDetails.nextInstallmentDueDate ? formatDate(contractDetails.lastInstallmentDueDate, locale) : '-'}
          </NormalMediumBlackText>
        </InfoRowContainer>
        <EightPixelsView />
        <InfoRowContainer>
          <BoldMediumGrayText>{translateWithFallback('NextDueDate', 'Next due date', locale)}</BoldMediumGrayText>
          <BoldMediumGrayText>{formatDate(contractDetails.nextInstallmentDueDate, locale)}</BoldMediumGrayText>
        </InfoRowContainer>
      </Card>

      {contractEquipment && (
        <CardWithBottomMargin>
          <NormalMediumFullText>
            {translateWithFallback('ContractEquipment', 'Contract equipment', locale)} - {contractNumber}
          </NormalMediumFullText>
          <CardLine />
          {contractEquipment.map(item => {
            return (
              <EquipmentContainer key={item.chassis + '-equipment'}>
                <BoldMediumGrayFullText>{`\u2022 ${item.type}`}</BoldMediumGrayFullText>
                <MarginNormalMediumText>
                  {item.model} - {item.chassis}
                </MarginNormalMediumText>
              </EquipmentContainer>
            );
          })}
          <NormalMediumFullText>
            {translateWithFallback(
              'EquipmentText',
              'The equipment of all contracts disbursed are listed above.',
              locale
            )}
          </NormalMediumFullText>
        </CardWithBottomMargin>
      )}
    </>
  );
};
