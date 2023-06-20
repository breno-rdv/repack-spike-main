import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { PreviewCard } from './PreviewCard';
import previewIcon from '../../../../../p1p3-mobile/src/assets/icons/home/bankBills.png';

describe('My PreviewCard ', function () {
  let testID: string;
  let icon: any;
  let isLoading: boolean;
  let cardTitle: string;
  let linkText: string;
  let firstDataText: string;
  let firstData: any;
  let secondDataText: string;
  let secondData: any;
  let additionalText: string;
  let emptyText: string;

  beforeEach(async () => {
    testID = 'TestId';
    icon = previewIcon;
    cardTitle = 'Title';
    linkText = 'Link';
    firstDataText = 'firstText';
    firstData = '20/03/2022';
    secondDataText = 'secondDataText:';
    secondData = '2000';
    additionalText = 'additionalText';
    emptyText = 'emptyText';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render previewCard with additional text correctly', async () => {
    const testRenderer = renderer.create(
      <PreviewCard
        testID={testID}
        icon={icon}
        isLoading={isLoading}
        cardTitle={cardTitle}
        linkText={linkText}
        firstDataText={firstDataText}
        firstData={firstData}
        secondDataText={secondDataText}
        secondData={secondData}
        additionalText={additionalText}
        emptyText={emptyText}
        onPressHandler={() => {}}
      />
    );

    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'icon' })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'title' }).props.children).toEqual(cardTitle);
    expect(testInstance.findByProps({ testID: 'link' }).props.children).toEqual(linkText);
    expect(testInstance.findByProps({ testID: 'firstText' }).props.children).toEqual(firstDataText);
    expect(testInstance.findByProps({ testID: 'firstValue' }).props.children).toEqual(firstData);
    expect(testInstance.findByProps({ testID: 'secondText' }).props.children).toEqual(secondDataText);
    expect(testInstance.findByProps({ testID: 'secondValue' }).props.children).toEqual(secondData);
    expect(testInstance.findByProps({ testID: 'additionalText' }).props.children).toEqual(additionalText);
  });

  it('should render previewCard without additional text correctly', async () => {
    const testRenderer = renderer.create(
      <PreviewCard
        testID={testID}
        icon={icon}
        isLoading={isLoading}
        cardTitle={cardTitle}
        linkText={linkText}
        firstDataText={firstDataText}
        firstData={firstData}
        secondDataText={secondDataText}
        secondData={secondData}
        emptyText={emptyText}
        onPressHandler={() => {}}
      />
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(PreviewCard)).toBeTruthy();
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'icon' })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'title' }).props.children).toEqual(cardTitle);
    expect(testInstance.findByProps({ testID: 'link' }).props.children).toEqual(linkText);
    expect(testInstance.findByProps({ testID: 'firstText' }).props.children).toEqual(firstDataText);
    expect(testInstance.findByProps({ testID: 'firstValue' }).props.children).toEqual(firstData);
    expect(testInstance.findByProps({ testID: 'secondText' }).props.children).toEqual(secondDataText);
    expect(testInstance.findByProps({ testID: 'secondValue' }).props.children).toEqual(secondData);
  });

  it('should render previewCard empty state correctly', async () => {
    const testRenderer = renderer.create(
      <PreviewCard
        testID={testID}
        icon={icon}
        isLoading={isLoading}
        cardTitle={cardTitle}
        linkText={linkText}
        emptyText={emptyText}
        onPressHandler={() => {}}
      />
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(PreviewCard)).toBeTruthy();
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'icon' })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'title' }).props.children).toEqual(cardTitle);
    expect(testInstance.findByProps({ testID: 'link' }).props.children).toEqual(linkText);
    expect(testInstance.findByProps({ testID: 'emptyText' }).props.children).toEqual(emptyText);
  });
});
