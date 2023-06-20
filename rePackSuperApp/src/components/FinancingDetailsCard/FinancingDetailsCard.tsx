import { formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import { Image, Linking, ScrollView } from 'react-native';
import canceledIcon from '../../../../../p1p3-mobile/src/assets/icons/financings/canceled.png';
import concludedIcon from '../../../../../p1p3-mobile/src/assets/icons/financings/concluded.png';
import inProgressIcon from '../../../../../p1p3-mobile/src/assets/icons/financings/inProgress.png';
import noneIcon from '../../../../../p1p3-mobile/src/assets/icons/financings/none.png';
import pendencyIcon from '../../../../../p1p3-mobile/src/assets/icons/financings/pendency.png';
import { BR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { AvailableStatus } from '../StatusBox/StatusBox';
import {
  BoldLinkPhone,
  FullColumnContainer,
  NoPadColumnContainer,
  PrimaryText,
  RowContainer,
  SecondaryText,
  StageCardView,
  TertiaryText,
  WrapperView,
} from './FinancingDetailsCard.css';
import { FinancingDetailsShimmerCard } from './FinancingDetailsShimmerCard';
import { EmptyStateScreen } from '../EmptyStateScreen/EmptyStateScreen';

export interface IFinancingDetailsCardProps {
  isLoadingFinancingDetails: boolean;
  stageStatus: AvailableStatus;
  stageStatusDetailKey: string;
  phaseStatusKey: string;
  updateDate: string;
  testID?: string;
}

export const FinancingDetailsCard: React.FC<IFinancingDetailsCardProps> = ({
  isLoadingFinancingDetails,
  stageStatus,
  stageStatusDetailKey,
  phaseStatusKey,
  updateDate,
  testID = 'financingDetailsCard',
}: IFinancingDetailsCardProps) => {
  const { locale } = useLocale();

  const emailSubject = translateWithFallback('FinancingEmailSubject', 'Banco John Deere - Financing', locale);

  const emailBody = translateWithFallback(
    'FinancingEmailBody',
    'I would like to request more information about my financings.\n Name:\n CPF/CNPJ:',
    locale
  );

  const getIcon = (inProgressStageStatus: AvailableStatus) => {
    switch (inProgressStageStatus) {
      case AvailableStatus.IN_PROGRESS:
        return <Image testID="inProgressIcon" source={inProgressIcon} />;
      case AvailableStatus.PENDENCY:
        return <Image testID="pendencyIcon" source={pendencyIcon} />;
      case AvailableStatus.CONCLUDED:
        return <Image testID="concludedIcon" source={concludedIcon} />;
      case AvailableStatus.CANCELED:
        return <Image testID="canceledIcon" source={canceledIcon} />;
      default:
        return <Image testID="noneIcon" source={noneIcon} />;
    }
  };
  const getPhaseInProgress = (phaseKey: string, phaseText: string) => {
    return (
      <RowContainer testID="phaseInProgress">
        {getIcon(stageStatus)}
        <NoPadColumnContainer>
          <PrimaryText>{translateWithFallback(phaseKey, phaseText, locale)}</PrimaryText>
          <SecondaryText>{translateWithFallback(stageStatusDetailKey, stageStatusDetailKey, locale)}</SecondaryText>
          <TertiaryText>
            {translateWithFallback('UpdateAt', 'Update at', locale)}: {formatDate(updateDate, locale)}
          </TertiaryText>
        </NoPadColumnContainer>
      </RowContainer>
    );
  };

  const getEmptyPhase = (phaseKey, phaseText) => {
    return (
      <RowContainer>
        {getIcon(null)}
        <NoPadColumnContainer>
          <PrimaryText>{translateWithFallback(phaseKey, phaseText, locale)}</PrimaryText>
        </NoPadColumnContainer>
      </RowContainer>
    );
  };

  const getPhaseConcluded = (phaseKey, phaseText) => {
    return (
      <RowContainer testID="phaseConcluded">
        {getIcon(AvailableStatus.CONCLUDED)}
        <NoPadColumnContainer>
          <PrimaryText>{translateWithFallback(phaseKey, phaseText, locale)}</PrimaryText>
        </NoPadColumnContainer>
      </RowContainer>
    );
  };

  const onPressPhoneCall = () => {
    return Linking.openURL('tel:08007233464');
  };

  const onPressMail = () => {
    return Linking.openURL(
      `mailto:BJD-FaleConosco@JohnDeere.com?subject=${encodeURI(emailSubject)}&body=${encodeURI(emailBody)}`
    );
  };

  const getPendencyPhase = (phaseKey, phaseText) => {
    return (
      <RowContainer testID="pendencyPhase">
        {getIcon(AvailableStatus.PENDENCY)}
        <NoPadColumnContainer>
          <PrimaryText>{translateWithFallback(phaseKey, phaseText, locale)}</PrimaryText>
          <SecondaryText>{translateWithFallback(stageStatusDetailKey, stageStatusDetailKey, locale)}</SecondaryText>
          <TertiaryText>
            {translateWithFallback('UpdateAt', 'Update at', locale)}: {formatDate(updateDate, locale)}
          </TertiaryText>
          <BR />
          <SecondaryText>{translateWithFallback('FormContact', 'Contact us by phone:', locale)}</SecondaryText>
          <BoldLinkPhone onPress={() => onPressPhoneCall()}>0800 723 3464</BoldLinkPhone>
          <BR />
          <SecondaryText>
            {translateWithFallback('FormMessage', 'If you prefer, send us a message using the email below:', locale)}
          </SecondaryText>
          <BoldLinkPhone onPress={() => onPressMail()}>BJD-FaleConosco@JohnDeere.com</BoldLinkPhone>
        </NoPadColumnContainer>
      </RowContainer>
    );
  };

  const getCanceledPhase = (phaseKey, phaseText) => {
    return (
      <RowContainer testID="canceledPhase">
        {getIcon(stageStatus)}
        <NoPadColumnContainer>
          <PrimaryText>{translateWithFallback(phaseKey, phaseText, locale)}</PrimaryText>
          <SecondaryText>{translateWithFallback(stageStatusDetailKey, stageStatusDetailKey, locale)}</SecondaryText>
          <TertiaryText>
            {translateWithFallback('UpdateAt', 'Update at', locale)}: {formatDate(updateDate, locale)}
          </TertiaryText>
        </NoPadColumnContainer>
      </RowContainer>
    );
  };

  const getCreditAnalysisPhase = () => {
    switch (stageStatus) {
      case AvailableStatus.PENDENCY:
        return getPendencyPhase('ResourceRelease', 'Resource release');
      case AvailableStatus.CANCELED:
        return getCanceledPhase('CreditAnalysis', 'Credit analysis');
      default:
        return getPhaseInProgress('CreditAnalysis', 'Credit analysis');
    }
  };

  const getResourceReleasePhase = () => {
    switch (stageStatus) {
      case AvailableStatus.PENDENCY:
        return getPendencyPhase('ResourceRelease', 'Resource release');
      case AvailableStatus.CONCLUDED:
        return getPhaseConcluded('ResourceRelease', 'Resource release');
      default:
        return getPhaseInProgress('ResourceRelease', 'Resource release');
    }
  };

  const setUpTrack = (
    creditAnalysisTrack,
    documentTrack,
    contractTrack,
    invoicingTrack,
    resourceTrack,
    creditStage?,
    documentStage?,
    contractStage?,
    invoicingStage?,
    resourceStage?
  ) => {
    return (
      <WrapperView>
        <StageCardView stageValue={creditStage}>{creditAnalysisTrack}</StageCardView>
        <StageCardView stageValue={documentStage}>{documentTrack}</StageCardView>
        <StageCardView stageValue={contractStage}>{contractTrack}</StageCardView>
        <StageCardView stageValue={invoicingStage}>{invoicingTrack}</StageCardView>
        <StageCardView stageValue={resourceStage}>{resourceTrack}</StageCardView>
      </WrapperView>
    );
  };

  const getFiveStagesComponents = () => {
    switch (phaseStatusKey) {
      case 'CreditAnalysis':
        return (
          <WrapperView testID="CreditAnalysisView">
            {setUpTrack(
              getCreditAnalysisPhase(),
              getEmptyPhase('DocumentAndWarrantyAnalysis', 'Document and warranty analysis'),
              getEmptyPhase('ContractEmission', 'Contract emission'),
              getEmptyPhase('InvoicingAuthorization', 'Invoicing authorization'),
              getEmptyPhase('ResourceRelease', 'Resource release'),
              stageStatus
            )}
          </WrapperView>
        );
      case 'DocumentAndWarrantyAnalysis':
        return (
          <WrapperView testID="DocumentAndWarrantyAnalysisView">
            {setUpTrack(
              getPhaseConcluded('CreditAnalysis', 'Credit analysis'),
              stageStatus == AvailableStatus.PENDENCY
                ? getPendencyPhase('DocumentAndWarrantyAnalysis', 'Document and warranty analysis')
                : getPhaseInProgress('DocumentAndWarrantyAnalysis', 'Document and warranty analysis'),
              getEmptyPhase('ContractEmission', 'Contract emission'),
              getEmptyPhase('InvoicingAuthorization', 'Invoicing authorization'),
              getEmptyPhase('ResourceRelease', 'Resource release'),
              AvailableStatus.CONCLUDED,
              stageStatus
            )}
          </WrapperView>
        );
      case 'ContractEmission':
        return (
          <WrapperView testID="ContractEmissionView">
            {setUpTrack(
              getPhaseConcluded('CreditAnalysis', 'Credit analysis'),
              getPhaseConcluded('DocumentAndWarrantyAnalysis', 'Document and warranty analysis'),
              stageStatus == AvailableStatus.PENDENCY
                ? getPendencyPhase('ContractEmission', 'Contract emission')
                : getPhaseInProgress('ContractEmission', 'Contract emission'),
              getEmptyPhase('InvoicingAuthorization', 'Invoicing authorization'),
              getEmptyPhase('ResourceRelease', 'Resource release'),
              AvailableStatus.CONCLUDED,
              AvailableStatus.CONCLUDED,
              stageStatus
            )}
          </WrapperView>
        );
      case 'InvoicingAuthorization':
        return (
          <WrapperView testID="InvoicingAuthorizationView">
            {setUpTrack(
              getPhaseConcluded('CreditAnalysis', 'Credit analysis'),
              getPhaseConcluded('DocumentAndWarrantyAnalysis', 'Document and warranty analysis'),
              getPhaseConcluded('ContractEmission', 'Contract emission'),
              stageStatus == AvailableStatus.PENDENCY
                ? getPendencyPhase('InvoicingAuthorization', 'Invoicing authorization')
                : getPhaseInProgress('InvoicingAuthorization', 'Invoicing authorization'),
              getEmptyPhase('ResourceRelease', 'Resource release'),
              AvailableStatus.CONCLUDED,
              AvailableStatus.CONCLUDED,
              AvailableStatus.CONCLUDED,
              stageStatus
            )}
          </WrapperView>
        );
      case 'ResourceRelease':
        return (
          <WrapperView testID="ResourceReleaseView">
            {setUpTrack(
              getPhaseConcluded('CreditAnalysis', 'Credit analysis'),
              getPhaseConcluded('DocumentAndWarrantyAnalysis', 'Document and warranty analysis'),
              getPhaseConcluded('ContractEmission', 'Contract emission'),
              getPhaseConcluded('InvoicingAuthorization', 'Invoicing authorization'),
              getResourceReleasePhase(),
              AvailableStatus.CONCLUDED,
              AvailableStatus.CONCLUDED,
              AvailableStatus.CONCLUDED,
              AvailableStatus.CONCLUDED,
              stageStatus
            )}
          </WrapperView>
        );
      default:
        return (
          <WrapperView testID="CreditAnalysisView">
            <EmptyStateScreen
              emailBody={emailBody}
              emailSubject={emailSubject}
              subtitle={translateWithFallback('TryAgainLater', 'TryAgainLater', locale)}
              title={translateWithFallback(
                'Error',
                'Oops, it looks like something went wrong, try again later.',
                locale
              )}
            />
          </WrapperView>
        );
    }
  };

  return isLoadingFinancingDetails ? (
    <FinancingDetailsShimmerCard />
  ) : (
    <FullColumnContainer testID="FinancingDetailsCard">
      <ScrollView showsVerticalScrollIndicator={false}>{getFiveStagesComponents()}</ScrollView>
    </FullColumnContainer>
  );
};
