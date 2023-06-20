import React from 'react';
import { Card, BR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { JustifiedRowContainer, MarginBox } from './Installment.css';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export const InstallmentDetailsShimmerCard: React.FC = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <Card testID={'shimmerInstallmentDetails'}>
      <ShimmerPlaceholder width={170} />
      <MarginBox>
        <ShimmerPlaceholder width={320} height={25} />
      </MarginBox>
      <JustifiedRowContainer>
        <ShimmerPlaceholder width={80} height={20} />
        <ShimmerPlaceholder width={100} height={20} />
      </JustifiedRowContainer>
      <BR />
      <JustifiedRowContainer>
        <ShimmerPlaceholder width={80} height={20} />
        <ShimmerPlaceholder width={100} height={20} />
      </JustifiedRowContainer>
    </Card>
  );
};
