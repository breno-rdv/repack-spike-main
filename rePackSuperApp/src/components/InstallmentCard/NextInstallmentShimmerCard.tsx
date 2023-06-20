import React from 'react';
import { Card, BR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { JustifiedRowContainer } from './Installment.css';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export const NextInstallmentShimmerCard: React.FC = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <Card testID={'shimmerNextInstallment'}>
      <JustifiedRowContainer>
        <ShimmerPlaceholder width={80} />
        <ShimmerPlaceholder width={60} height={25} />
      </JustifiedRowContainer>
      <BR />
      <ShimmerPlaceholder width={160} height={40} />
    </Card>
  );
};
