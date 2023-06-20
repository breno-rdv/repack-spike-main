import React from 'react';
import 'react-native';
import { RouteNameContext } from '../../../../../p1p3-mobile/src/contexts/RouteNameContext/RouteNameContext';
import { HomeContext } from '../../../../../p1p3-mobile/src/scenes/HomeScene/HomeContext';
import { act, fireEvent, render } from '../../../../../p1p3-mobile/src/test';
import { MockedNavigator } from '../../../../../p1p3-mobile/src/test/MockNavigator';
import { Header } from './Header';
import { logEvent } from '../../../../../p1p3-mobile/src/managers/MetricsManager';

jest.mock('../../managers/MetricsManager.tsx');

describe('My header ', function () {
  const title = 'Hello Maria';
  let testInstance: any;

  beforeEach(async () => {
    testInstance = render(
      <MockedNavigator
        component={() => (
          <HomeContext.Provider
            value={{
              isLoadingBankBill: false,
              isLoadingCreditLimit: false,
            }}
          >
            <Header title={title} />
          </HomeContext.Provider>
        )}
      />
    );
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    expect(testInstance.getByTestId('header')).toBeTruthy();
  });

  it('should have the text with Hello Maria', async () => {
    expect(testInstance.getByText('Hello Maria')).toBeTruthy();
  });

  it('should render a menu icon', async () => {
    expect(testInstance.findByTestId('drawer')).toBeTruthy();
  });

  it('should have onPress function ', () => {
    const buttonAction = jest.fn();

    const testInstance = render(
      <MockedNavigator
        component={() => (
          <HomeContext.Provider
            value={{
              isLoadingBankBill: false,
              isLoadingCreditLimit: false,
            }}
          >
            <Header title={title} backButton backButtonAction={buttonAction} />
          </HomeContext.Provider>
        )}
      />
    );
    const backButton = testInstance.getByTestId('backButton');

    fireEvent.press(backButton);

    expect(buttonAction).toHaveBeenCalledTimes(1);
  });

  it('should have onPress function to open menu', async () => {
    const testInstance = render(
      <MockedNavigator
        component={() => (
          <HomeContext.Provider
            value={{
              isLoadingBankBill: false,
              isLoadingCreditLimit: false,
            }}
          >
            <Header title={title} />
          </HomeContext.Provider>
        )}
      />
    );
    const drawerIcon = await testInstance.findByTestId('drawer');

    fireEvent.press(drawerIcon);

    expect(logEvent).toHaveBeenCalledTimes(1);
  });

  it('should render with home style with loaded data', async () => {
    const subtitleButtonOnPress = jest.fn();
    const testInstance = render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home' }}>
            <HomeContext.Provider
              value={{
                isLoadingBankBill: false,
                isLoadingCreditLimit: false,
              }}
            >
              <Header title={title} subtitleButton={'Change'} subtitleButtonOnPress={subtitleButtonOnPress} />
            </HomeContext.Provider>
          </RouteNameContext.Provider>
        )}
      ></MockedNavigator>
    );
    expect(testInstance.getByTestId('header')).toBeTruthy();
    expect(testInstance.getByTestId('headerMenuTitle')).toBeTruthy();
    const subtitleButton = await testInstance.getByTestId('subtitleButton');

    fireEvent.press(subtitleButton);

    expect(subtitleButtonOnPress).toBeCalled();
  });

  it('should render with home style with loading data', async () => {
    const subtitleButtonOnPress = jest.fn();
    const testInstance = render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home' }}>
            <HomeContext.Provider
              value={{
                isLoadingBankBill: true,
                isLoadingCreditLimit: true,
              }}
            >
              <Header title={title} subtitleButton={'Change'} subtitleButtonOnPress={subtitleButtonOnPress} />
            </HomeContext.Provider>
          </RouteNameContext.Provider>
        )}
      ></MockedNavigator>
    );
    expect(testInstance.getByTestId('header')).toBeTruthy();
    expect(testInstance.getByTestId('headerMenuTitle')).toBeTruthy();
    const subtitleButton = await testInstance.getByTestId('subtitleButton');
    fireEvent.press(subtitleButton);
    expect(subtitleButtonOnPress).toBeCalledTimes(0);
  });

  it('should render with right button icon and do the action', async () => {
    const customRightIconAction = jest.fn();
    const testInstance = render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home' }}>
            <HomeContext.Provider value={{}}>
              <Header
                title={title}
                subtitleButton={'Change'}
                subtitleButtonOnPress={jest.fn()}
                customRightIcon={'icon'}
                customRightIconAction={customRightIconAction}
              />
            </HomeContext.Provider>
          </RouteNameContext.Provider>
        )}
      ></MockedNavigator>
    );
    const rightButton = await testInstance.getByTestId('custom-right-icon-action');

    expect(rightButton).toBeTruthy();
    await act(async () => {
      fireEvent.press(rightButton);
    });
    expect(customRightIconAction).toBeCalledTimes(1);
  });
});
