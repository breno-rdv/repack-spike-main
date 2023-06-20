import React, { useState } from 'react';
import { ErrorText, InputContainer, TitleText, WarningText, ButtonContainer } from './GovIdInput.css';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { Input } from '../Input';
import { removeMask } from '../../../../../p1p3-mobile/src/managers/Mask';
import { Button } from '../Button';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export interface GovInputProps {
  testID?: string;
  govIdText?: string;
  label: string;
  placeholder: string;
  govIdError: string;
  inputLength: number;
  setGovId: any;
  setGovIdError: any;
  onPressEnter: any;
  fieldMask: any;
  isLoading: boolean;
  setRef?: any;
  feedbackType?: any;
}

export const GovIdInput: React.FC<GovInputProps> = ({ setRef, ...props }) => {
  const [govIdInput, setGovIdInput] = useState('');

  const { locale } = useLocale();
  return (
    <>
      {props.govIdText && <TitleText>{props.govIdText}</TitleText>}
      <InputContainer>
        <Input
          testID={props.testID}
          maxLength={props.inputLength}
          label={props.label}
          placeholder={props.placeholder}
          placeholderTextColor={theme.GRAY_COLOR_500}
          value={govIdInput}
          keyboardType={'numeric'}
          onChangeText={value => {
            setGovIdInput(props.fieldMask(value));
            props.setGovId(removeMask(value));
            props.setGovIdError('');
          }}
          autoFocus
          isError={!props.govIdError ? false : true}
        />
        {!props.govIdError ? (
          <WarningText>*{translateWithFallback('ObligatoryInfo', 'Required field', locale)}</WarningText>
        ) : (
          <ErrorText testID={'govIdErrorText'}>{props.govIdError}</ErrorText>
        )}
      </InputContainer>
      <ButtonContainer>
        <Button
          testID="enterButton"
          onPress={() => {
            // remove this after, not needed as we have setGovId input parameter
            props.onPressEnter(removeMask(govIdInput));
          }}
          loading={props.isLoading}
          boldText
          disabled={govIdInput.length < props.inputLength}
          text={translateWithFallback('Continue', 'Continue', locale)}
        />
      </ButtonContainer>
    </>
  );
};
