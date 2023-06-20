import { formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React, { useState } from 'react';
import { Image } from 'react-native';
import calendarIcon from '../../../../../p1p3-mobile/src/assets/icons/calendar.png';
import calenderIcon from '../../../../../p1p3-mobile/src/assets/icons/contract/calender.png';
import checkIcon from '../../../../../p1p3-mobile/src/assets/icons/contract/check.png';
import downIcon from '../../../../../p1p3-mobile/src/assets/icons/contract/downChevron.png';
import upIcon from '../../../../../p1p3-mobile/src/assets/icons/contract/upChevron.png';
import warningIcon from '../../../../../p1p3-mobile/src/assets/icons/contract/warning.png';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { IInstallmentsData } from '../../../../../p1p3-mobile/src/services/ContractService/newContractService';
import {
  BoldText,
  CenterBoxMediumText,
  CenterBoxMediumTextGray,
  ContainerBox,
  CustomCard,
  CustomContainer,
  GrayLine,
  InfoRowContainer,
  InstallmentContainer,
  LeftBoxMediumText,
  LeftBoxMediumTextGray,
  NormalMediumText,
  RigthBoxMediumText,
  RigthBoxMediumTextGray,
  GreenLink,
  GreenText,
} from './NewContractMirrorCard.css';
import { formatCurrencyValue } from '../../../../../p1p3-mobile/src/managers/CurrencyMask';
import { EV_CONTRACT_STATEMENT_DETAIL_EXPAND_INSTALLMENTS, logEvent } from '../../../../../p1p3-mobile/src/managers/MetricsManager';

export enum Status {
  OPEN = 'open',
  PAYED = 'payed',
  LATE = 'late',
}

export const iconInstallment = (status: string) => {
  switch (status) {
    case Status.OPEN:
      return <Image source={calenderIcon} />;
    case Status.PAYED:
      return <Image source={checkIcon} />;
    case Status.LATE:
      return <Image source={warningIcon} />;
    default:
      return <Image source={calendarIcon} />;
  }
};

export interface ICardProps {
  testID: string;
  title: string;
  subTitle: string;
  status: string;
  currency: string;
  installments: IInstallmentsData[];
  onPress?: any;
  onExpandEvent?: any;
}

export const NewContractMirrorTable: React.FC<ICardProps> = ({
  testID,
  title,
  subTitle,
  status,
  currency,
  installments,
  onPress,
  onExpandEvent,
}: ICardProps) => {
  const [isActive, setActive] = useState<boolean>(installments.length <= 6);
  const { locale } = useLocale();

  return (
    <CustomCard
      onPress={() => {
        logEvent(EV_CONTRACT_STATEMENT_DETAIL_EXPAND_INSTALLMENTS);
        setActive(!isActive);
        onExpandEvent();
      }}
      status={status}
      testID={testID}
    >
      <CustomContainer>
        <InfoRowContainer>
          <ContainerBox>
            {iconInstallment(status)}
            <BoldText>{title}</BoldText>
          </ContainerBox>
          {!isActive ? <Image source={downIcon} /> : <Image source={upIcon} />}
        </InfoRowContainer>
        <NormalMediumText>{subTitle}</NormalMediumText>
      </CustomContainer>

      {isActive && (
        <>
          <GrayLine />
          <CustomContainer>
            <InfoRowContainer>
              <LeftBoxMediumTextGray>
                {translateWithFallback('Installment', 'Installment', locale)}
              </LeftBoxMediumTextGray>
              <CenterBoxMediumTextGray>{translateWithFallback('DueDate', 'Due date', locale)}</CenterBoxMediumTextGray>
              <RigthBoxMediumTextGray>
                {translateWithFallback('Value', 'Value', locale)} ({currency})
              </RigthBoxMediumTextGray>
            </InfoRowContainer>

            {installments.map((item, key) => {
              return (
                <InstallmentContainer key={item.number + '-installment'}>
                  {key == 0 ? null : <GrayLine />}
                  <InfoRowContainer>
                    <LeftBoxMediumText>{item['number']}</LeftBoxMediumText>
                    <CenterBoxMediumText>{formatDate(item['dueDate'], locale)}</CenterBoxMediumText>
                    <RigthBoxMediumText>{formatCurrencyValue(currency, item['value'])}</RigthBoxMediumText>
                  </InfoRowContainer>
                </InstallmentContainer>
              );
            })}
            {testID == 'LateInstallments' && (
              <GreenLink onPress={onPress}>
                <GreenText>{translateWithFallback('LateBankBills', 'How to pay late bank bills?', locale)}</GreenText>
              </GreenLink>
            )}
          </CustomContainer>
        </>
      )}
    </CustomCard>
  );
};
