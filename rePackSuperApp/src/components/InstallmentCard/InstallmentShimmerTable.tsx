import React from 'react';
import { Card, BR } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { JustifiedRowContainer, JustifiedRowContainerMargin } from './Installment.css';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';

export const InstallmentShimmerTable: React.FC = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <Card testID={'shimmerInstallmentTable'}>
      <ShimmerPlaceholder width={150} height={25} />
      <BR />
      <BR />

      <JustifiedRowContainerMargin>
        <ShimmerPlaceholder width={60} />
        <ShimmerPlaceholder width={60} />
        <ShimmerPlaceholder width={60} />
      </JustifiedRowContainerMargin>
      <JustifiedRowContainer>
        <ShimmerPlaceholder width={60} />
        <ShimmerPlaceholder width={60} />
        <ShimmerPlaceholder width={60} />
      </JustifiedRowContainer>
      <JustifiedRowContainerMargin>
        <ShimmerPlaceholder width={60} />
        <ShimmerPlaceholder width={60} />
        <ShimmerPlaceholder width={60} />
      </JustifiedRowContainerMargin>

      <BR />
      <ShimmerPlaceholder width={300} height={35} />
    </Card>
  );
};
