import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Loader } from '../Loader';
import {
  TextContainer,
  RowContainer,
  ButtonContainerSecondary,
  SecondaryBoldText,
  SecondaryButtonText,
} from './Button.css';

export interface IButtonProps {
  text: string;
  loading?: boolean;
  boldText?: boolean;
  testID?: string;
  RightIconComponent?: React.ComponentType;
  borderWidth?: number;
}

export const SecondaryButton: React.FC<IButtonProps & TouchableOpacityProps> = ({
  text,
  loading = false,
  boldText = false,
  testID = 'button',
  RightIconComponent,
  borderWidth = 1,
  ...props
}: IButtonProps & TouchableOpacityProps) => {
  const ButtonContent = () => {
    return (
      <>
        {loading && <Loader isButton />}
        {!loading && (
          <RowContainer>
            <TextContainer>
              {boldText ? (
                <SecondaryBoldText>{text}</SecondaryBoldText>
              ) : (
                <SecondaryButtonText>{text}</SecondaryButtonText>
              )}
            </TextContainer>
            {RightIconComponent}
          </RowContainer>
        )}
      </>
    );
  };

  return (
    <ButtonContainerSecondary
      testID={testID}
      {...props}
      activeOpacity={loading ? 1 : 0.2}
      onPress={loading ? () => {} : props.onPress}
      borderWidth={borderWidth}
    >
      <ButtonContent />
    </ButtonContainerSecondary>
  );
};
