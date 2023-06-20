import React, { useEffect, useState } from 'react';
import {
  InputContainer,
  ButtonContainer,
  ContinueButton,
  ContinueButtonText,
  RequiredText,
  AddressRow,
  CityContainer,
  StateContainer,
  NumberContainer,
  DistrictContainer,
  WhiteSpace,
} from './AddressInput.css';
import { translateWithFallback } from '../../../../../p1p3-mobile/src/internationalization/Internationalization';
import { useLocale } from '../../../../../p1p3-mobile/src/contexts/LocaleContext/LocaleContext';
import { Input } from '../Input';

export interface AddressInputProps {
  testIDs: string | object;
  label: string | object;
  placeholder: string | object;
  inputLength: number | object;
  isLoading: boolean | object;
  zipCodeFields: any;
  onPressEnter: any;
  fieldMask?: any;
  inputTitleText?: string | object;
  keyboardType?: string | object;
  setRef?: any;
  validation?: any;
}

export const AddressInput: React.FC<AddressInputProps> = ({ ...props }) => {
  const [dataInput, setDataInput] = useState({
    Street: '',
    Number: '',
    District: '',
    Complement: '',
    City: '',
    State: '',
  });
  const { zipCodeFields } = props;

  useEffect(() => {
    if (zipCodeFields !== undefined) {
      setDataInput({
        ...dataInput,
        Street: zipCodeFields['streetName'],
        District: zipCodeFields['neighborhood'],
        State: zipCodeFields['state'],
        City: zipCodeFields['city'],
      });
    }
  }, []);

  const { locale } = useLocale();

  return (
    <>
      <InputContainer showsVerticalScrollIndicator={true}>
        <Input
          testID={props.testIDs['Street']}
          maxLength={props.inputLength['Street']}
          label={props.label['Street']}
          placeholder={props.placeholder['Street']}
          value={dataInput['Street']}
          onChangeText={value => {
            props.fieldMask
              ? setDataInput({ ...dataInput, Street: props.fieldMask(value) })
              : setDataInput({ ...dataInput, Street: value });
          }}
          setRef={setDataInput}
          autoFocus={false}
        />
        <AddressRow>
          <NumberContainer>
            <Input
              testID={props.testIDs['Number']}
              maxLength={props.inputLength['Number']}
              label={props.label['Number'] + '*'}
              placeholder={props.placeholder['Number']}
              value={dataInput['Number']}
              keyboardType="numeric"
              onChangeText={value => {
                props.fieldMask
                  ? setDataInput({ ...dataInput, Number: props.fieldMask(value) })
                  : setDataInput({ ...dataInput, Number: value });
              }}
              setRef={setDataInput}
              autoFocus
            />
            <RequiredText>*{translateWithFallback('ObligatoryInfo', 'Required field', locale)}</RequiredText>
          </NumberContainer>
          <DistrictContainer>
            <Input
              testID={props.testIDs['District']}
              maxLength={props.inputLength['District']}
              label={props.label['District']}
              placeholder={props.placeholder['District']}
              value={dataInput['District']}
              onChangeText={value => {
                props.fieldMask
                  ? setDataInput({ ...dataInput, District: props.fieldMask(value) })
                  : setDataInput({ ...dataInput, District: value });
              }}
              setRef={setDataInput}
              autoFocus={false}
            />
          </DistrictContainer>
        </AddressRow>
        <Input
          testID={props.testIDs['Complement']}
          maxLength={props.inputLength['Complement']}
          label={props.label['Complement']}
          placeholder={props.placeholder['Complement']}
          value={dataInput['Complement']}
          onChangeText={value => {
            props.fieldMask
              ? setDataInput({ ...dataInput, Complement: props.fieldMask(value) })
              : setDataInput({ ...dataInput, Complement: value });
          }}
          setRef={setDataInput}
          autoFocus={false}
        />

        <AddressRow>
          <CityContainer>
            <Input
              editable={zipCodeFields['city'] ? zipCodeFields['city'].length === 0 : true}
              testID={props.testIDs['City']}
              maxLength={props.inputLength['City']}
              label={props.label['City']}
              placeholder={props.placeholder['City']}
              value={dataInput['City']}
              onChangeText={value => {
                props.fieldMask
                  ? setDataInput({ ...dataInput, City: props.fieldMask(value) })
                  : setDataInput({ ...dataInput, City: value });
              }}
              setRef={setDataInput}
              autoFocus={false}
            />
          </CityContainer>

          <StateContainer>
            <Input
              editable={zipCodeFields['state'] ? zipCodeFields['state'].length === 0 : true}
              testID={props.testIDs['State']}
              maxLength={props.inputLength['State']}
              label={props.label['State']}
              placeholder={props.placeholder['State']}
              value={dataInput['State']}
              onChangeText={value => {
                const validatedValue = value.replace(/[^a-z]/gi, '');
                props.fieldMask
                  ? setDataInput({ ...dataInput, State: props.fieldMask(validatedValue) })
                  : setDataInput({ ...dataInput, State: validatedValue });
              }}
              setRef={setDataInput}
              autoFocus={false}
            />
          </StateContainer>
        </AddressRow>
        <WhiteSpace />
      </InputContainer>

      <ButtonContainer>
        <ContinueButton
          testID="continueButton"
          onPress={() => {
            props.onPressEnter(dataInput);
          }}
          disabled={
            !props.validation(dataInput['Street']) ||
            !props.validation(dataInput['District']) ||
            !props.validation(dataInput['State']) ||
            !props.validation(dataInput['City']) ||
            !props.validation(dataInput['Number']) ||
            props.isLoading
          }
        >
          <ContinueButtonText>{translateWithFallback('Continue', 'Continue', locale)}</ContinueButtonText>
        </ContinueButton>
      </ButtonContainer>
    </>
  );
};
