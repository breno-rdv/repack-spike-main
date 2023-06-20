import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { BR, Card, ColumnContainer, SpaceBetweenContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { GrayText, PrimaryBoldLargeText, BoldMediumLargeText } from './ContractCard.css';
import { formatDate } from '@deere-jdf/p1p3-shared-libs-format';

export interface ICardProps {
  testID: string;
  contractNumber?: number;
  adhesion?: number;
  modality?: string;
  issuanceDate?: string;
  totalInstallments?: number;
  onPressHandler: any;
}

export const ContractCard: React.FC<ICardProps> = ({ ...props }) => {
  const { locale } = useLocale();

  return (
    <>
      <Card testID={props.testID} onPress={props.onPressHandler}>
        <GrayText testID="headerInfo">{translateWithFallback('Contract', 'Contract:', locale)}</GrayText>
        <PrimaryBoldLargeText>
          {props.contractNumber}/{props.adhesion}
        </PrimaryBoldLargeText>
        <BR />
        <SpaceBetweenContainer>
          <ColumnContainer>
            <GrayText testID="headerInfo">
              {translateWithFallback('TotalInstallments', 'Total installments', locale)}
            </GrayText>
            <BoldMediumLargeText>{props.totalInstallments}</BoldMediumLargeText>
          </ColumnContainer>
          <ColumnContainer>
            <GrayText testID="headerInfo">{translateWithFallback('IssuanceDate', 'Issuance date', locale)}</GrayText>
            <BoldMediumLargeText>{formatDate(props.issuanceDate, locale)}</BoldMediumLargeText>
          </ColumnContainer>
        </SpaceBetweenContainer>
      </Card>
    </>
  );
};
