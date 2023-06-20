import React from 'react';
import { act, render } from '../../../../../p1p3-mobile/src/test';
import { MockedNavigator } from '../../../../../p1p3-mobile/src/test/MockNavigator';
import { OnboardContext } from '../../../../../p1p3-mobile/src/contexts/OnboardContext/OnboardContext';
import { AddressInput } from './AddressInput';
import { addressValidator } from '../../../../../p1p3-mobile/src/managers/Validator';

describe('Address Input Scene ', function () {
  beforeEach(() => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render all components', async () => {
    const zipFields = { state: 'test', city: 'test', neighborhood: 'test', streetName: 'test' };
    const testIds = {
      Street: 'street',
      Number: 'number',
      Complement: 'complement',
      District: 'district',
      State: 'state',
      City: 'city',
    };
    const labels = {
      Street: 'street',
      Number: 'number',
      Complement: 'complement',
      District: 'district',
      State: 'state',
      City: 'city',
    };
    const inputLengths = { Street: 70, Number: 10, Complement: 70, District: 70, State: 2, City: 70 };
    const placeHolders = { Street: '', Number: '', Complement: '', District: '', State: '', City: '' };
    const renderResult = render(
      <MockedNavigator
        component={() => (
          <OnboardContext.Provider value={{}}>
            <AddressInput
              zipCodeFields={zipFields}
              testIDs={testIds}
              label={labels}
              placeholder={placeHolders}
              inputLength={inputLengths}
              isLoading={false}
              onPressEnter={() => {}}
              validation={addressValidator}
            />
          </OnboardContext.Provider>
        )}
      />
    );
    await act(async () => {});

    expect(renderResult.getByTestId('street')).toBeTruthy();
    expect(renderResult.getByTestId('number')).toBeTruthy();
    expect(renderResult.getByTestId('complement')).toBeTruthy();
    expect(renderResult.getByTestId('district')).toBeTruthy();
    expect(renderResult.getByTestId('state')).toBeTruthy();
    expect(renderResult.getByTestId('city')).toBeTruthy();
    expect(renderResult.getByTestId('continueButton')).toBeTruthy();
  });
});
