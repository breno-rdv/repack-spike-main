import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../p1p3-mobile/src/assets/variables.css';
import { FullColumnContainer, StageCardView } from './FinancingDetailsCard.css';

export const FinancingDetailsShimmerCard: React.FC = () => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <FullColumnContainer testID="financingDetailsCardShimmer">
      <StageCardView stageValue={null}>
        <ShimmerPlaceholder width={SCREEN_WIDTH / 1.5} height={SCREEN_HEIGHT / 45} />
      </StageCardView>
      <StageCardView stageValue={null}>
        <ShimmerPlaceholder width={SCREEN_WIDTH / 1.5} height={SCREEN_HEIGHT / 45} />
      </StageCardView>
      <StageCardView stageValue={null}>
        <ShimmerPlaceholder width={SCREEN_WIDTH / 1.5} height={SCREEN_HEIGHT / 45} />
      </StageCardView>
      <StageCardView stageValue={null}>
        <ShimmerPlaceholder width={SCREEN_WIDTH / 1.5} height={SCREEN_HEIGHT / 45} />
      </StageCardView>
      <StageCardView stageValue={null}>
        <ShimmerPlaceholder width={SCREEN_WIDTH / 1.5} height={SCREEN_HEIGHT / 45} />
      </StageCardView>
    </FullColumnContainer>
  );
};
