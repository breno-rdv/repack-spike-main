import React, { useEffect, useRef, useState } from 'react';
import { Platform, TextInputProps } from 'react-native';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { CustomInput, InputText, InputView, InputTextContainer } from './Input.css';

export interface InputProps {
  label: string;
  testID?: string;
  isError?: boolean;
  customComponent?: any;
  androidKeyboardFocus?: boolean;
	removeLetterWithAccent?: boolean;
}

export const Input: React.FC<InputProps & TextInputProps> = ({
  label,
  testID = 'inputText',
  isError,
  customComponent,
	removeLetterWithAccent,
  ...props
}) => {
  const [borderColor, setBorderColor] = useState(theme.TERTIARY_COLOR);
  const inputRef = useRef(null);

  useEffect(() => {
    if (Platform.OS === 'android' && props.androidKeyboardFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef.current]);

  const getBorderColor = () => {
    if (props.editable !== undefined && props.editable === false) {
      return theme.GRAY_COLOR_700;
    } else {
      return isError ? theme.RED_COLOR_1 : borderColor;
    }
  };

	const sanitizeField = (value: string) => {
		if (removeLetterWithAccent) {
			return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
		}
		return value;
	}

  return (
    <>
      <InputTextContainer>
        <InputText color={getBorderColor()}>{label}</InputText>
      </InputTextContainer>
      <InputView borderColor={getBorderColor()}>
        <CustomInput
          autoFocus={true}
          testID={testID}
          {...props}
          onFocus={() => setBorderColor(theme.PRIMARY_COLOR)}
          onBlur={() => setBorderColor(theme.TERTIARY_COLOR)}
          ref={inputRef}
					value={sanitizeField(props.value)}
        ></CustomInput>
        {customComponent}
      </InputView>
    </>
  );
};
