import React from 'react';

import CheckBox from '@react-native-community/checkbox';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';
import { CheckBoxView, CheckBoxText } from './CheckBoxContainer.css';

export interface CheckBoxContainerProps {
  testID?: string;
  testIDCheckBox?: string;
  testIDCheckBoxText?: string;
  checkBoxDisable: boolean;
  checkBoxValue: boolean;
  onValueChange?: any;
  checkBoxText: string;
}

export const CheckBoxContainer: React.FC<CheckBoxContainerProps> = ({
  testID,
  testIDCheckBox,
  testIDCheckBoxText,
  checkBoxDisable,
  checkBoxValue,
  onValueChange,
  checkBoxText,
}) => {
  const primaryColor = theme.PRIMARY_COLOR;
  const secondaryColor = theme.GRAY_COLOR_700;

  return (
    <CheckBoxView testID={testID}>
      <CheckBox
        testID={testIDCheckBox}
        disabled={checkBoxDisable}
        value={checkBoxValue}
        onValueChange={onValueChange}
        boxType={'square'}
        tintColor={secondaryColor}
        onCheckColor={theme.WHITE}
        onFillColor={primaryColor}
        onTintColor={primaryColor}
        tintColors={{ true: primaryColor, false: secondaryColor }}
        style={{ width: 18, height: 18 }}
      />
      <CheckBoxText testID={testIDCheckBoxText}>{checkBoxText}</CheckBoxText>
    </CheckBoxView>
  );
};
