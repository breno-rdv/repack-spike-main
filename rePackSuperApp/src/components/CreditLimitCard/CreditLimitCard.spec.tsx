import 'react-native';
import React from 'react';

import renderer from 'react-test-renderer';
import { CreditLimitCard } from './CreditLimitCard';

describe('My CreditLimitCard ', function () {
  let creditLimitTitle: string;
  let creditLimitSubtitle: string;
  let creditLimitValue: string;
  let creditLimitExtraInformation: string;
  let testRenderer: any;

  beforeEach(async () => {
    creditLimitTitle = 'Credit Limit';
    creditLimitSubtitle = 'Pre approved';
    creditLimitValue = 'US$20000,00';
    creditLimitExtraInformation = 'Details >';

    testRenderer = renderer.create(
      <CreditLimitCard
        creditLimitTitle={creditLimitTitle}
        creditLimitSubtitle={creditLimitSubtitle}
        creditLimitValue={creditLimitValue}
        creditLimitExtraInformation={creditLimitExtraInformation}
        onPressHandler={() => {}}
      />
    );
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(CreditLimitCard)).toBeTruthy();
  });

  it('should have all expected values', async () => {
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: 'creditLimitTitle' }).props.children).toEqual(creditLimitTitle);
    expect(testInstance.findByProps({ testID: 'creditLimitSubtitle' }).props.children).toEqual(creditLimitSubtitle);
    expect(testInstance.findByProps({ testID: 'creditLimitValue' }).props.children).toEqual(creditLimitValue);
    expect(testInstance.findByProps({ testID: 'creditLimitExtraInformation' }).props.children).toEqual(
      creditLimitExtraInformation
    );
  });
});
