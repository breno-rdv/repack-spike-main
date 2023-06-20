import 'react-native';
import React from 'react';
import TestRenderer from 'react-test-renderer';
import { HorizontalScrollView } from './HorizontalScrollView';
import horizontalIcon from '../../../../../p1p3-mobile/src/assets/icons/home/bankBills.png';

jest.useFakeTimers();

describe('My HorizontalScrollView ', function () {
  let testID: string;
  let icon: any;
  let cardTitle: string;

  beforeEach(async () => {
    testID = 'TestId';
    icon = horizontalIcon;
    cardTitle = 'Title';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render horizontalScrollView ', async () => {
    const testRenderer = TestRenderer.create(
      <HorizontalScrollView testID={testID} icon={icon} cardTitle={cardTitle} showCardInfoTitle />
    );

    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'icon' })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'cardContent' })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'cardText' }).props.children).toEqual(cardTitle);
  });
});
