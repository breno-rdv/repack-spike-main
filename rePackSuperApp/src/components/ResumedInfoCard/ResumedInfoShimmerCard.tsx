import React from 'react';
import { BR, HR, CardNoShadow, SpaceBetweenContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { PaddingView } from './ResumedInfoCard.css';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import LinearGradient from 'react-native-linear-gradient';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../p1p3-mobile/src/assets/variables.css';
export interface IResumedInfoShimmerCardProps {
  removeLine?: boolean;
}

export const ResumedInfoShimmerCard: React.FC<IResumedInfoShimmerCardProps> = ({
  removeLine,
}: IResumedInfoShimmerCardProps) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  return (
    <CardNoShadow testID={'resumedInfoCardShimmer'}>
      <PaddingView>
        <SpaceBetweenContainer>
          <ShimmerPlaceholder width={SCREEN_WIDTH / 5} height={SCREEN_HEIGHT / 45} />
          <ShimmerPlaceholder width={SCREEN_WIDTH / 5} height={SCREEN_HEIGHT / 50} />
        </SpaceBetweenContainer>
        <BR />
        <ShimmerPlaceholder width={SCREEN_WIDTH / 3} height={SCREEN_HEIGHT / 25} />
      </PaddingView>
      {removeLine ? <BR /> : <HR />}
      <PaddingView>
        <SpaceBetweenContainer>
          <ShimmerPlaceholder width={SCREEN_WIDTH / 4} height={SCREEN_HEIGHT / 25} />
          <ShimmerPlaceholder width={SCREEN_WIDTH / 3} height={SCREEN_HEIGHT / 25} />
        </SpaceBetweenContainer>
      </PaddingView>
    </CardNoShadow>
  );
};
