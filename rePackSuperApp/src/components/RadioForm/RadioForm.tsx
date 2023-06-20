import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RadioButtonContainer, RadioButtonText, OuterRadioView, InnerRadioView } from './RadioForm.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export interface IRadioButtonProps {
  elements: string[];
  checked: string;
  setChecked: React.Dispatch<React.SetStateAction<string>>;
  testID?: string;
}

export const RadioForm: React.FC<IRadioButtonProps & TouchableOpacityProps> = ({
  elements,
  checked,
  setChecked,
  testID = 'radioForm',
  ...props
}: IRadioButtonProps & TouchableOpacityProps) => {
  return (
    <>
      {elements.map((data, key) => {
        return (
          <RadioButtonContainer
            testID={testID + data}
            {...props}
            key={key}
            onPress={() => {
              setChecked(data);
            }}
          >
            <OuterRadioView
              style={{
                borderColor: checked === data ? theme.PRIMARY_COLOR : theme.GRAY_COLOR_3030,
              }}
            >
              {checked === data ? (
                <InnerRadioView
                  style={{
                    backgroundColor: checked === data ? theme.PRIMARY_COLOR : theme.GRAY_COLOR_3030,
                  }}
                />
              ) : null}
            </OuterRadioView>
            <RadioButtonText style={{ color: checked === data ? theme.PRIMARY_COLOR : theme.GRAY_COLOR_3030 }}>
              {data}
            </RadioButtonText>
          </RadioButtonContainer>
        );
      })}
    </>
  );
};
