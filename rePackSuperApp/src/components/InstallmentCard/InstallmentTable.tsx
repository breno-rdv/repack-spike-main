import { formatCurrency, formatDate } from '@deere-jdf/p1p3-shared-libs-format';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import addIcon from '../../../../../p1p3-mobile/src/assets/icons/add.png';
import calendarIcon from '../../../../../p1p3-mobile/src/assets/icons/calendar.png';
import criticalIcon from '../../../../../p1p3-mobile/src/assets/icons/critical/critical.png';
import okIcon from '../../../../../p1p3-mobile/src/assets/icons/ok2.png';
import removeIcon from '../../../../../p1p3-mobile/src/assets/icons/remove.png';
import { BR, CenterContainer, HR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { IInstallmentData } from '../../../../../p1p3-mobile/src/services/ContractDetailsService/contractDetailsService';
import { ContactUsButton } from '../ContactUs';
import {
  BoldText,
  BoxMediumText,
  BoxMediumTextGrey,
  ButtonIconBox,
  ContainerBox,
  CustomCard,
  CustomContainer,
  HRInstallment,
  IconBox,
  JustifiedRowContainer,
} from './Installment.css';

export type InstallmentType = 'overdue' | 'payed' | 'open';

export interface ICardProps {
  testID: string;
  type: InstallmentType;
  installmentsCount: number;
  installments: IInstallmentData[];
  headerSingular: string;
  headerPlural: string;
}

export const InstallmentTable: React.FC<ICardProps> = ({
  testID,
  type,
  installmentsCount,
  installments,
  headerSingular,
  headerPlural,
}: ICardProps) => {
  const [isActive, setActive] = useState<boolean>(installmentsCount <= 12 || type === 'overdue');
  const { locale } = useLocale();
  const emailSubject = translateWithFallback(
    'ContractDetailsEmailSubject',
    'Banco John Deere - Request overdue bank bill',
    locale
  );
  const emailBody = translateWithFallback(
    'ContractDetailsEmailBody',
    'I would like to request my overdue bank bill.\nName: \nCPF/CNPJ: ',
    locale
  );

  return (
    <CustomCard testID={testID}>
      <CustomContainer>
        <ContainerBox>
          <IconBox>
            {type === 'open' && <Image source={calendarIcon} />}
            {type === 'payed' && <Image source={okIcon} />}
            {type === 'overdue' && <Image source={criticalIcon} />}
          </IconBox>
          <CenterContainer>
            <BoldText>
              {'  '}
              {installmentsCount} {installmentsCount === 1 ? headerSingular : headerPlural}
            </BoldText>
          </CenterContainer>
        </ContainerBox>
        {type != 'overdue' && (
          <ButtonIconBox onPress={() => setActive(!isActive)}>
            {!isActive && <Image source={addIcon} />}
            {isActive && <Image source={removeIcon} />}
          </ButtonIconBox>
        )}
      </CustomContainer>

      <HRInstallment testID={type + 'HR'} />

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
                <View key={key + '-installment'}>
                  <HR />
                  <JustifiedRowContainer>
                    <BoxMediumText>{item['parcelNumber']}</BoxMediumText>
                    <BoxMediumText>{formatDate(item['dueDate'], locale)}</BoxMediumText>
                    <BoxMediumText>
                      {formatCurrency(item['slipValue'])}
                      {item.writeOffStatus === 'PARTIAL_PAYMENT' ? ' *' : ''}
                    </BoxMediumText>
                  </JustifiedRowContainer>
                  {item.writeOffStatus === 'PARTIAL_PAYMENT' && (
                    <>
                      <HR />
                      <JustifiedRowContainer>
                        <Text>
                          *{' '}
                          {translateWithFallback(
                            'PartialInstallmentMessage',
                            'This installment was partially paid. Please contact us for more details 0800 723 3464.',
                            locale
                          )}
                        </Text>
                      </JustifiedRowContainer>
                    </>
                  )}
                </View>
              );
            })}

            {type == 'overdue' && (
              <>
                <BR />
                <ContactUsButton
                  textMessage={translateWithFallback('RequestOverdueBill', 'Request overdue bank bill', locale)}
                  sceneName={'Installment'}
                  email
                  emailBody={emailBody}
                  emailSubject={emailSubject}
                />
              </>
            )}
          </CustomContainer>
        </>
      )}
    </CustomCard>
  );
};
