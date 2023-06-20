import React from 'react';
import 'react-native';
import { act, render } from '../../../../../p1p3-mobile/src/test';
import { ResumedInfoCard } from './ResumedInfoCard';

jest.useFakeTimers();

describe('Load resumed info card ', function () {
  let isLoadingCardInfo: boolean;
  let cardInfoId: string;
  let cardInfoDate: string;
  let cardInfoValue: number;

  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should have all expected values for card info', async () => {
    isLoadingCardInfo = false;
    cardInfoId = '12345';
    cardInfoDate = '1990-10-15';
    cardInfoValue = 150000012.3;
    const testRenderer = render(
      <ResumedInfoCard
        isLoadingCardInfo={isLoadingCardInfo}
        cardInfoId={cardInfoId}
        cardInfoDate={cardInfoDate}
        cardInfoValue={cardInfoValue}
        showCardInfoBottomMessage={true}
        cardInfoBottomMessage="Info message"
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('cardInfoId')).toBeTruthy();
    expect(testRenderer.getByTestId('cardInfoDate')).toBeTruthy();
    expect(testRenderer.getByTestId('cardInfoValue')).toBeTruthy();
    expect(testRenderer.getByTestId('card-info-bottom-message')).toBeTruthy();
  });

  it('should not show cardInfoBottomMessage', async () => {
    isLoadingCardInfo = false;
    cardInfoId = '12345';
    cardInfoDate = '1990-10-15';
    cardInfoValue = 150000012.3;
    const testRenderer = render(
      <ResumedInfoCard
        isLoadingCardInfo={isLoadingCardInfo}
        cardInfoId={cardInfoId}
        cardInfoDate={cardInfoDate}
        cardInfoValue={cardInfoValue}
        showCardInfoBottomMessage={false}
        cardInfoBottomMessage="Info message"
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('cardInfoId')).toBeTruthy();
    expect(testRenderer.getByTestId('cardInfoDate')).toBeTruthy();
    expect(testRenderer.getByTestId('cardInfoValue')).toBeTruthy();
    expect(testRenderer.queryByTestId('card-info-bottom-message')).toBeNull();
  });

  it('should display shimmer when loading resumed info card', async () => {
    isLoadingCardInfo = true;
    cardInfoId = '';
    cardInfoDate = '';
    cardInfoValue = 0;
    const testRenderer = render(
      <ResumedInfoCard
        isLoadingCardInfo={isLoadingCardInfo}
        cardInfoId={cardInfoId}
        cardInfoDate={cardInfoDate}
        cardInfoValue={cardInfoValue}
      />
    );
    expect(testRenderer).toBeTruthy();
    await act(async () => {});

    expect(testRenderer.getByTestId('resumedInfoCardShimmer')).toBeTruthy();
  });
});
