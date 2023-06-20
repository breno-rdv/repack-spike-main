import React from 'react';
import { Image } from 'react-native';
import { formatCurrency, formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { BR, FullRowContainer, HR, SpaceBetweenContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { formatCurrencyValue } from '../../../../../p1p3-mobile/src/managers/CurrencyMask';
import { AvailableStatus, BankBillStatus, StatusBox } from '../StatusBox/StatusBox';
import infoIcon from '../../../../../p1p3-mobile/src/assets/icons/alert/information/info-full-green.png';
import {
  BoldCustomMediumText,
  BoldExtraLargeText,
  Card,
  CardContainer,
  InfoMessageContainer,
  LightMediumText,
  LightMediumTextPadding,
  LinkSmallText,
  LinkSmallTextPadding,
  PaddingView,
  SmallTextButton,
  TextColumnContainer,
} from './ResumedInfoCard.css';
import { ResumedInfoShimmerCard } from './ResumedInfoShimmerCard';

export interface IResumedInfoCardProps {
  isLoadingCardInfo: boolean;
  financingStatusText?: AvailableStatus;
  bankBillStatusText?: BankBillStatus;
  cardInfoId: number;
  cardInfoDate: string;
  cardInfoValue: number;
  primaryText: string;
  secondaryText: string;
  tertiaryText: string;
  fourthText: string;
  onPressHandler?: any;
  testID?: string;
  currency?: string;
  removeLine?: boolean;
  showCardInfoBottomMessage: boolean;
  cardInfoBottomMessage: string;
}

export const ResumedInfoCard: React.FC<IResumedInfoCardProps> = ({
  isLoadingCardInfo,
  financingStatusText,
  bankBillStatusText,
  cardInfoId,
  cardInfoDate,
  cardInfoValue,
  primaryText,
  secondaryText,
  tertiaryText,
  fourthText,
  onPressHandler,
  currency,
  removeLine,
  testID,
  showCardInfoBottomMessage,
  cardInfoBottomMessage,
}: IResumedInfoCardProps) => {
  const { locale } = useLocale();

  const handleLine = () => {
    if (removeLine) {
      return <BR />;
    } else {
      return <HR />;
    }
  };

  const handleCardInfoValue = () => {
    if (financingStatusText) {
      return <BoldCustomMediumText testID="cardInfoValue">{formatCurrency(cardInfoValue)}</BoldCustomMediumText>;
    } else if (bankBillStatusText) {
      return <BoldCustomMediumText testID="cardInfoValue">{cardInfoValue}</BoldCustomMediumText>;
    } else {
      return (
        <BoldCustomMediumText testID="cardInfoValue">
          {formatCurrencyValue(currency, cardInfoValue)}
        </BoldCustomMediumText>
      );
    }
  };

  const headerHandler = () => {
    if (financingStatusText || bankBillStatusText) {
      return (
        <PaddingView>
          <SpaceBetweenContainer>
            <StatusBox financingStatusText={financingStatusText} bankBillStatusText={bankBillStatusText} />
            <SmallTextButton onPress={onPressHandler}>
              <LinkSmallTextPadding>
                {secondaryText}
                {' >'}
              </LinkSmallTextPadding>
            </SmallTextButton>
          </SpaceBetweenContainer>
          <BR />
          <TextColumnContainer>
            <LightMediumText>
              {primaryText}
              {':'}
            </LightMediumText>
            {bankBillStatusText ? (
              <BoldExtraLargeText testID="cardInfoId">{formatCurrency(cardInfoId)}</BoldExtraLargeText>
            ) : (
              <BoldExtraLargeText testID="cardInfoId">{cardInfoId}</BoldExtraLargeText>
            )}
          </TextColumnContainer>
        </PaddingView>
      );
    } else {
      return (
        <PaddingView>
          <SpaceBetweenContainer>
            <LightMediumTextPadding>
              {primaryText}
              {':'}
            </LightMediumTextPadding>
            <SmallTextButton onPress={onPressHandler}>
              <LinkSmallText>
                {secondaryText}
                {' >'}
              </LinkSmallText>
            </SmallTextButton>
          </SpaceBetweenContainer>
          <BR />
          <TextColumnContainer>
            <BoldExtraLargeText testID="cardInfoId">{cardInfoId}</BoldExtraLargeText>
          </TextColumnContainer>
        </PaddingView>
      );
    }
  };

  return isLoadingCardInfo ? (
    <ResumedInfoShimmerCard testID="resumedInfoCardShimmer" removeLine={removeLine} />
  ) : (
    <CardContainer>
      <Card testID={testID} onPress={onPressHandler}>
        <FullRowContainer>
          {headerHandler()}
          {handleLine()}
          <PaddingView>
            <TextColumnContainer>
              <LightMediumText>
                {tertiaryText}
                {':'}
              </LightMediumText>
              <BoldCustomMediumText testID="cardInfoDate">{formatDate(cardInfoDate, locale)}</BoldCustomMediumText>
            </TextColumnContainer>
            <TextColumnContainer>
              <LightMediumText>
                {fourthText}
                {':'}
              </LightMediumText>
              {handleCardInfoValue()}
            </TextColumnContainer>
          </PaddingView>
        </FullRowContainer>
      </Card>
      {showCardInfoBottomMessage && (
        <InfoMessageContainer testID="card-info-bottom-message">
          <Image style={{ marginRight: 10 }} source={infoIcon} />
          <LightMediumTextPadding>{cardInfoBottomMessage}</LightMediumTextPadding>
        </InfoMessageContainer>
      )}
    </CardContainer>
  );
};
