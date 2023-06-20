import React from 'react';
import { act } from 'react-native-testing-library';
import { fireEvent, render } from '../../../../../p1p3-mobile/src/test';
import { ListUserLinksModal } from './ListUserLinksModal';

jest.useFakeTimers();

describe('List User Links Modal ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const onPressClose = jest.fn();
    const onPressButton = jest.fn();
    const renderResult = render(
      <ListUserLinksModal
        sceneName={'homeScene'}
        modalVisible={true}
        onPressClose={onPressClose}
        onPressButton={onPressButton}
        onPressUpdateCustomer={jest.fn()}
        userLinks={{
          links: [],
        }}
        actualUserGovId={''}
      />
    );

    expect(renderResult.getByTestId('listUserLinksModal')).toBeTruthy();
    const overlayModal = renderResult.getByTestId('overlayModalView');
    expect(overlayModal).toBeTruthy();
    await act(async () => fireEvent.press(overlayModal));
    const exitButton = renderResult.getByTestId('exitButton');
    expect(exitButton).toBeTruthy();
    await act(async () => fireEvent.press(exitButton));
    expect(onPressClose).toBeCalledTimes(2);
    const createNewLinkButton = renderResult.getByTestId('createNewLinkButton');
    expect(createNewLinkButton).toBeTruthy();
    await act(async () => fireEvent.press(createNewLinkButton));
    expect(onPressButton).toBeCalledTimes(1);
  });

  it('should render one user link button', async () => {
    const onPressClose = jest.fn();
    const onPressButton = jest.fn();
    const onPressUpdateCustomer = jest.fn();

    const renderResult = render(
      <ListUserLinksModal
        sceneName={'homeScene'}
        modalVisible={true}
        onPressClose={onPressClose}
        onPressButton={onPressButton}
        onPressUpdateCustomer={onPressUpdateCustomer}
        userLinks={{
          links: [{ govId: '12345678910', name: 'JohnDue' }],
        }}
        actualUserGovId={''}
      />
    );

    const govIdLinkButton = renderResult.getByTestId('govIdLink:0');
    expect(govIdLinkButton).toBeTruthy();
    await act(async () => fireEvent.press(govIdLinkButton));
    expect(onPressUpdateCustomer).toBeCalledWith({ govId: '12345678910', name: 'JohnDue' });
  });
});
