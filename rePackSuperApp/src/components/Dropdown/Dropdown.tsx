import React, { useState } from 'react';
import { Image, TouchableNativeFeedback } from 'react-native';
import { FullRowContainer } from '../../../../../p1p3-mobile/src/assets/theme.css';
import downIcon from '../../../../../p1p3-mobile/src/assets/icons/chevron-down-green.png';
import upIcon from '../../../../../p1p3-mobile/src/assets/icons/chevron-up-green.png';
import {
  ContainerBox,
  ButtonIconBox,
  HeaderContainer,
  ItemsContainer,
  BoldLargeText,
  BoldMediumText,
  StyledHR,
  AbsoluteContainer,
  ButtonItemBox,
  HRContainer,
  GreenText,
  LabelContainer,
} from './Dropdown.css';

export interface ICardProps {
  testID: string;
  label?: string;
  data: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  transformFunction?: (string) => string;
}

export const Dropdown: React.FC<ICardProps> = ({
  testID,
  label,
  data,
  selected,
  setSelected,
  transformFunction,
}: ICardProps) => {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <AbsoluteContainer>
        <TouchableNativeFeedback testID={testID} onPress={() => setActive(!isActive)}>
          <HeaderContainer>
            <LabelContainer>
              <GreenText testID="label">{label}</GreenText>
            </LabelContainer>
            <ContainerBox>
              <BoldLargeText>{transformFunction ? transformFunction(selected) : selected}</BoldLargeText>
            </ContainerBox>
            <ButtonIconBox testID={testID + '_button'}>
              {!isActive && data.length > 1 && <Image source={downIcon} />}
              {isActive && data.length > 1 && <Image source={upIcon} />}
            </ButtonIconBox>
          </HeaderContainer>
        </TouchableNativeFeedback>

        {isActive && (
          <>
            <ItemsContainer>
              {data
                .filter(item => item !== selected)
                .map((item, key) => {
                  return (
                    <FullRowContainer key={key + '_container'}>
                      <HRContainer>
                        <ContainerBox>
                          <StyledHR />
                        </ContainerBox>
                      </HRContainer>

                      <ButtonItemBox
                        key={key + '_itemButton'}
                        testID={testID + item + '_itemButton'}
                        onPress={() => {
                          setSelected(item);
                          setActive(false);
                        }}
                      >
                        <BoldMediumText key={key + '_itemText'}>
                          {transformFunction ? transformFunction(item) : item}
                        </BoldMediumText>
                      </ButtonItemBox>
                    </FullRowContainer>
                  );
                })}
            </ItemsContainer>
          </>
        )}
      </AbsoluteContainer>
    </>
  );
};
