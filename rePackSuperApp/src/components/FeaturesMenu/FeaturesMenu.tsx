import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../../../p1p3-mobile/src/assets/variables.css';
import { AvailableStatus, StatusBox } from '../StatusBox/StatusBox';
import {
  GrayLine,
  Greenline,
  MenuButton,
  NoPaddingContainer,
  PrimaryText,
  RowContainer,
  SecondaryGreenText,
  SecondaryMenuText,
  SecondaryText,
  ShimmerContainer,
} from './FeaturesMenu.css';

export interface FeaturesMenuProps {
  isLoading: boolean;
  titleDescription: string;
  titleText: string;
  firstMenuOption: string;
  secondMenuOption: string;
  onPressHandler: any;
  financingStatusText?: AvailableStatus;
}

export const FeaturesMenu: React.FC<FeaturesMenuProps> = ({ ...props }: FeaturesMenuProps) => {
  const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

  const [firstButtonOnFocus, setFirstButtonOnFocus] = useState(true);

  const selectedButton = (selectedText: any, testID: string) => {
    return (
      <>
        <SecondaryGreenText testID={testID}>{selectedText}</SecondaryGreenText>
        <Greenline />
      </>
    );
  };

  const unselectedButton = (unselectedText: any, testID: string) => {
    return (
      <>
        <SecondaryMenuText testID={testID}>{unselectedText}</SecondaryMenuText>
        <GrayLine />
      </>
    );
  };

  return (
    <>
      <RowContainer>
        <SecondaryText>{props.titleDescription}:</SecondaryText>
        {props.financingStatusText && <StatusBox financingStatusText={props.financingStatusText}></StatusBox>}
      </RowContainer>
      {props.isLoading ? (
        <ShimmerContainer>
          <ShimmerPlaceholder width={SCREEN_WIDTH / 2} height={SCREEN_HEIGHT / 35} />
        </ShimmerContainer>
      ) : (
        <PrimaryText>{props.titleText}</PrimaryText>
      )}
      <NoPaddingContainer>
        <MenuButton
          testID="FirstButton"
          onPress={() => {
            if (!props.isLoading) {
              props.onPressHandler(true);
              setFirstButtonOnFocus(true);
            }
          }}
        >
          {firstButtonOnFocus
            ? selectedButton(props.firstMenuOption, 'SelectFirstButton')
            : unselectedButton(props.firstMenuOption, 'UnselectFirstButton')}
        </MenuButton>
        <MenuButton
          testID="SecondButton"
          onPress={() => {
            if (!props.isLoading) {
              props.onPressHandler(false);
              setFirstButtonOnFocus(false);
            }
          }}
        >
          {firstButtonOnFocus
            ? unselectedButton(props.secondMenuOption, 'UnselectSecondaryButton')
            : selectedButton(props.secondMenuOption, 'SelectSecondaryButton')}
        </MenuButton>
      </NoPaddingContainer>
    </>
  );
};
