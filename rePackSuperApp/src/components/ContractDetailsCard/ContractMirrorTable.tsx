import { formatCurrency, formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React, { useState } from 'react';
import { Image, View } from 'react-native';
import addIcon from '../../../../../p1p3-mobile/src/assets/icons/add.png';
import calendarIcon from '../../../../../p1p3-mobile/src/assets/icons/calendar.png';
import removeIcon from '../../../../../p1p3-mobile/src/assets/icons/remove.png';
import { CenterContainer, HR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { IInstallmentData } from '../../../../../p1p3-mobile/src/services/ContractDetailsService/contractDetailsService';
import {
  BoldText,
  BoxMediumText,
  BoxMediumTextGrey,
  ButtonIconBox,
  ContainerBox,
  CustomCard,
  CustomContainer,
  IconBox,
  JustifiedRowContainer,
} from './ContractMirrorCard.css';

export interface ICardProps {
  testID: string;
  installmentsCount: number;
  installments: IInstallmentData[];
}

export const ContractMirrorTable: React.FC<ICardProps> = ({ testID, installmentsCount, installments }: ICardProps) => {
  const [isActive, setActive] = useState<boolean>(installmentsCount <= 12);
  const { locale } = useLocale();

  const headerSingular = translateWithFallback('Installment', 'Installment', locale);
  const headerPlural = translateWithFallback('Installments', 'Installments', locale);

  return (
    <CustomCard testID={testID}>
      <CustomContainer>
        <ContainerBox>
          <IconBox>
            <Image source={calendarIcon} />
          </IconBox>
          <CenterContainer>
            <BoldText>
              {'  '}
              {installmentsCount} {installmentsCount === 1 ? headerSingular : headerPlural}
            </BoldText>
          </CenterContainer>
        </ContainerBox>
        <ButtonIconBox onPress={() => setActive(!isActive)}>
          {!isActive && <Image source={addIcon} />}
          {isActive && <Image source={removeIcon} />}
        </ButtonIconBox>
      </CustomContainer>
      {isActive && (
        <>
          <CustomContainer>
            <JustifiedRowContainer>
              <BoxMediumTextGrey>{translateWithFallback('Installment', 'Installment', locale)}</BoxMediumTextGrey>
              <BoxMediumTextGrey>{translateWithFallback('DueDate', 'Due date', locale)}</BoxMediumTextGrey>
              <BoxMediumTextGrey>{translateWithFallback('Value', 'Value', locale)}</BoxMediumTextGrey>
            </JustifiedRowContainer>

            {installments.map((item, key) => {
              return (
                <View key={item.contractNumber + item.adhesion + '-installment'}>
                  <HR />
                  <JustifiedRowContainer>
                    <BoxMediumText>{item['parcelNumber']}</BoxMediumText>
                    <BoxMediumText>{formatDate(item['dueDate'], locale)}</BoxMediumText>
                    <BoxMediumText>{formatCurrency(item['slipValue'])}*</BoxMediumText>
                  </JustifiedRowContainer>
                </View>
              );
            })}
          </CustomContainer>
        </>
      )}
    </CustomCard>
  );
};
