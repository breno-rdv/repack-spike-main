import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HelpCard } from './HelpCard';

describe('My HelpCard ', function () {
  let testID: string;
  let cardTitle: string;
  let cardText: string;
  let buttonText: string;

  beforeEach(async () => {
    testID = 'TestId';
    cardTitle = 'Title';
    cardText = 'CardText';
    buttonText = 'ButtonTex';
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render help card correctly', async () => {
    const testRenderer = renderer.create(
      <HelpCard
        testID={testID}
        cardTitle={cardTitle}
        cardText={cardText}
        buttonText={buttonText}
        onPressHandler={() => {}}
      />
    );
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'button' })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'cardText' }).props.children).toEqual(cardText);
    expect(testInstance.findByProps({ testID: 'buttonText' }).props.children).toEqual(buttonText);
  });
});
