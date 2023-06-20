import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { CreditLimitDetailsCard } from './CreditLimitDetailsCard';

describe('My Credit Limit Details Card ', function () {
  let testID: string;
  let cardTitle: string;
  let amount: string;
  let firstDataTitle: string;
  let dueDate: string;
  let secondDataTitle: string;
  let lastUpdateDate: string;
  let cardText: string;

  beforeEach(async () => {
    testID = 'cardCreditLimit';
    cardTitle = 'title';
    amount = 'R$20000,00';
    firstDataTitle = 'firstTitle';
    dueDate = '20/03/2022';
    secondDataTitle = 'secondDataTitle:';
    lastUpdateDate = '20/03/2022';
    cardText = 'text';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render previewCard with additional text correctly', async () => {
    const testRenderer = renderer.create(
      <CreditLimitDetailsCard
        testID={testID}
        cardTitle={cardTitle}
        amount={amount}
        firstDataTitle={firstDataTitle}
        dueDate={dueDate}
        secondDataTitle={secondDataTitle}
        lastUpdateDate={lastUpdateDate}
        cardText={cardText}
      />
    );

    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'title' }).props.children).toEqual(cardTitle);
    expect(testInstance.findByProps({ testID: 'amount' }).props.children).toEqual(amount);
    expect(testInstance.findByProps({ testID: 'firstDataTitle' }).props.children).toEqual(firstDataTitle);
    expect(testInstance.findByProps({ testID: 'nextDueDate' }).props.children).toEqual(dueDate);
    expect(testInstance.findByProps({ testID: 'secondDataTitle' }).props.children).toEqual(secondDataTitle);
    expect(testInstance.findByProps({ testID: 'lastDueDate' }).props.children).toEqual(lastUpdateDate);
    expect(testInstance.findByProps({ testID: 'cardText' }).props.children).toEqual(cardText);
  });
});
