import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import React from 'react';
import { ScrollView } from 'react-native';
import { HR, Shimmer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import {
  BoldMediumText,
  Card,
  EightPixelsView,
  GraySmallText,
  InfoRowContainer,
  LargeBoldText,
  NormalMediumText,
  TwelvePixelsView,
} from '../../../../../p1p3-mobile/src/scenes/ContractDetailsScene/ContractDetailsScene.css';
import { CustomCard, CustomContainer } from './NewContractMirrorCard.css';
import { iconInstallment } from './NewContractMirrorTable';

export const ContractDetailsShimmer: React.FC = () => {
  const { locale } = useLocale();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Card>
        <InfoRowContainer>
          <BoldMediumText>{translateWithFallback('DisbursementAmount', 'Disbursement amount', locale)}:</BoldMediumText>
          <Shimmer shimmerWidth={'40%'} shimmerHeight={'20px'} />
        </InfoRowContainer>
        <HR />
        <InfoRowContainer>
          <BoldMediumText>{translateWithFallback('FullAmount', 'Full amount', locale)}:</BoldMediumText>
          <Shimmer shimmerWidth={'40%'} shimmerHeight={'20px'} />
        </InfoRowContainer>
        <GraySmallText>{translateWithFallback('WithInterestRate', 'with interest rate', locale)}</GraySmallText>
        <EightPixelsView />
        <Shimmer shimmerWidth={'100%'} shimmerHeight={'10px'} marginTop={'8px'} />
        <TwelvePixelsView />
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('UpToMaturity', 'Up to maturity', locale)}:</NormalMediumText>
          <Shimmer shimmerWidth={'40%'} shimmerHeight={'20px'} />
        </InfoRowContainer>
        <EightPixelsView />
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('Paid', 'Paid', locale)}:</NormalMediumText>
          <Shimmer shimmerWidth={'40%'} shimmerHeight={'20px'} />
        </InfoRowContainer>
      </Card>
      <Card>
        <NormalMediumText>{translateWithFallback('NextInstallment', 'Next installment', locale)}:</NormalMediumText>
        <LargeBoldText>
          <Shimmer shimmerWidth={'50%'} shimmerHeight={'30px'} paddingTop={'8px'} />
        </LargeBoldText>
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('DueDate', 'DueDate', locale)}:</NormalMediumText>
          <Shimmer shimmerWidth={'30%'} shimmerHeight={'20px'} />
        </InfoRowContainer>
      </Card>
      <CustomCard status={''} testID={'DefaultContractMirror'}>
        <CustomContainer>
          <InfoRowContainer>
            {iconInstallment('')}
            <Shimmer shimmerWidth={'90%'} shimmerHeight={'15px'} />
          </InfoRowContainer>
          <Shimmer shimmerHeight={'15px'} marginTop={'15px'} />
        </CustomContainer>
      </CustomCard>
      <CustomCard status={''} testID={'DefaultContractMirror'}>
        <CustomContainer>
          <InfoRowContainer>
            {iconInstallment('')}
            <Shimmer shimmerWidth={'90%'} shimmerHeight={'15px'} />
          </InfoRowContainer>
          <Shimmer shimmerHeight={'15px'} marginTop={'15px'} />
        </CustomContainer>
      </CustomCard>
      <CustomCard status={''} testID={'DefaultContractMirror'}>
        <CustomContainer>
          <InfoRowContainer>
            {iconInstallment('')}
            <Shimmer shimmerWidth={'90%'} shimmerHeight={'15px'} />
          </InfoRowContainer>
          <Shimmer shimmerHeight={'15px'} marginTop={'15px'} />
        </CustomContainer>
      </CustomCard>
      <Card>
        <InfoRowContainer>
          <NormalMediumText>{translateWithFallback('UpdateAt', 'Update at', locale)}:</NormalMediumText>
          <Shimmer shimmerWidth={'30%'} shimmerHeight={'15px'} />
        </InfoRowContainer>
        <Shimmer shimmerHeight={'15px'} marginTop={'15px'} />
      </Card>
    </ScrollView>
  );
};
