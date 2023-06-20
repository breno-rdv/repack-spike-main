import React from 'react';
import { Image, TouchableOpacityProps } from 'react-native';
import { CenterContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import { Loader } from '../Loader';
import { ButtonContainer, BoldText, IconContainer, ButtonText, RowContainer } from './Button.css';
import * as theme from '../../../../../p1p3-mobile/src/assets/variables.css';

export interface IButtonProps {
  text: string;
  loading?: boolean;
  imageSource?: string;
  RightIconComponent?: React.ComponentType;
  boldText?: boolean;
  testID?: string;
}

export const Button: React.FC<IButtonProps & TouchableOpacityProps> = ({
  text,
  loading = false,
  imageSource,
  boldText = false,
  testID = 'button',
  RightIconComponent,
  ...props
}: IButtonProps & TouchableOpacityProps) => {
  const ButtonContent = () => {
    return (
      <>
        {loading && <Loader isButton color={theme.BLACK} />}
        {!loading && (
          <RowContainer>
            {!!imageSource && (
              <IconContainer>
                <Image source={imageSource} />
              </IconContainer>
            )}
            <CenterContainer>
              {boldText ? <BoldText>{text}</BoldText> : <ButtonText>{text}</ButtonText>}
            </CenterContainer>
            {RightIconComponent}
          </RowContainer>
        )}
      </>
    );
  };

  return (
    <ButtonContainer
      testID={testID}
      {...props}
      activeOpacity={loading ? 1 : 0.2}
      onPress={loading ? () => {} : props.onPress}
    >
      <ButtonContent />
    </ButtonContainer>
  );
};
