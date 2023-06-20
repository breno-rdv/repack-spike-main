import React from 'react';
import { PressableProps } from 'react-native';
import {
  AdditionalInformationButton,
  AdditionalInformationButtonText,
  AdditionalInformationLine,
  AdditionalInformationText,
  AdditionalInformationTextView,
  AdditionalInformationView,
  AdditionInformationSubTitle,
  AdditionInformationTitle,
  GreenCard,
} from './CreditLimitCard.css';

export interface CardProps {
  testID?: string;
  creditLimitTitle: string;
  creditLimitValue: string;
  creditLimitSubtitle: string;
  creditLimitExtraInformation: string;
  onPressHandler?: () => void;
}

export const CreditLimitCard: React.FC<CardProps & PressableProps> = ({ testID = 'pressable', ...props }) => {
  return (
    <GreenCard testID={testID}>
      <AdditionalInformationView>
        <AdditionInformationTitle testID={'creditLimitTitle'}>{props.creditLimitTitle}</AdditionInformationTitle>
        <AdditionInformationSubTitle testID={'creditLimitSubtitle'}>
          {props.creditLimitSubtitle}
        </AdditionInformationSubTitle>
      </AdditionalInformationView>
      <AdditionalInformationTextView>
        <AdditionalInformationText testID={'creditLimitValue'}>{props.creditLimitValue}</AdditionalInformationText>
      </AdditionalInformationTextView>
      <AdditionalInformationLine />

      <AdditionalInformationButton onPress={props.onPressHandler}>
        <AdditionalInformationButtonText testID={'creditLimitExtraInformation'}>
          {props.creditLimitExtraInformation}
        </AdditionalInformationButtonText>
      </AdditionalInformationButton>
    </GreenCard>
  );
};
