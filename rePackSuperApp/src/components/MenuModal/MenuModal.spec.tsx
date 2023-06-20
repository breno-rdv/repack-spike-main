import React from 'react';
import { CustomerProvider } from '../../../../../p1p3-mobile/src/contexts/CustomerContext/CustomerContext';
import { RouteNameContext } from '../../../../../p1p3-mobile/src/contexts/RouteNameContext/RouteNameContext';
import { HomeProvider } from '../../../../../p1p3-mobile/src/scenes/HomeScene/HomeContext';
import { BankBillService } from '../../../../../p1p3-mobile/src/services/BankBillService/bankBillService';
import { CreditLimitService } from '../../../../../p1p3-mobile/src/services/CreditLimitService/creditLimitService';
import { CustomerService } from '../../../../../p1p3-mobile/src/services/CustomerService/customerService';
import { render, fireEvent } from '../../../../../p1p3-mobile/src/test';
import { MockedNavigator } from '../../../../../p1p3-mobile/src/test/MockNavigator';
import { Menu } from './MenuModal';
import { FeatureFlagService } from '../../../../../p1p3-mobile/src/services/FeatureFlagService/FeatureFlagService';

describe('My Menu ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {
    jest.useFakeTimers();
    const featureFlagService = FeatureFlagService.getInstance();
    jest.spyOn(featureFlagService, 'isFeatureEnabled').mockImplementation(() => true);
  });
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home', setRouteName: jest.fn() }}>
            <CustomerProvider customerService={CustomerService.getInstance()}>
              <HomeProvider
                bankBillService={BankBillService.getInstance()}
                creditLimitService={CreditLimitService.getInstance()}
              >
                <Menu />
              </HomeProvider>
            </CustomerProvider>
          </RouteNameContext.Provider>
        )}
      />
    );
  });

  it('should render all menu items', async () => {
    const renderResult = render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home', setRouteName: jest.fn() }}>
            <CustomerProvider customerService={CustomerService.getInstance()}>
              <HomeProvider
                bankBillService={BankBillService.getInstance()}
                creditLimitService={CreditLimitService.getInstance()}
              >
                <Menu modalVisible={true} onPressHandler={() => {}} />
              </HomeProvider>
            </CustomerProvider>
          </RouteNameContext.Provider>
        )}
      />
    );

    expect(renderResult.getByTestId('Home')).toBeTruthy();
    expect(renderResult.getByTestId('BankBills')).toBeTruthy();
    expect(renderResult.getByTestId('Financings')).toBeTruthy();
    expect(renderResult.getByTestId('Contracts')).toBeTruthy();
    expect(renderResult.getByTestId('IR')).toBeTruthy();
    expect(renderResult.getByTestId('FAQ')).toBeTruthy();
    expect(renderResult.getByTestId('ContactUs')).toBeTruthy();
    expect(renderResult.getByTestId('Settings')).toBeTruthy();
    expect(renderResult.getByTestId('About')).toBeTruthy();
    expect(renderResult.getByTestId('Logout')).toBeTruthy();
  });

  it('should have navigate to Home', async () => {
    const mockNavigation = jest.fn();
    const renderResult = render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home', setRouteName: jest.fn() }}>
            <CustomerProvider customerService={CustomerService.getInstance()}>
              <HomeProvider
                bankBillService={BankBillService.getInstance()}
                creditLimitService={CreditLimitService.getInstance()}
              >
                <Menu modalVisible={true} onPressHandler={mockNavigation} />
              </HomeProvider>
            </CustomerProvider>
          </RouteNameContext.Provider>
        )}
      />
    );

    const cardClick = renderResult.getByTestId('Home');

    fireEvent.press(cardClick);

    expect(mockNavigation).toHaveBeenCalledTimes(1);
  });

  it('should navigate to BankBills', () => {
    const mockNavigation = jest.fn();
    const renderResult = render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home', setRouteName: jest.fn() }}>
            <CustomerProvider customerService={CustomerService.getInstance()}>
              <HomeProvider
                bankBillService={BankBillService.getInstance()}
                creditLimitService={CreditLimitService.getInstance()}
              >
                <Menu modalVisible={true} onPressHandler={mockNavigation} />
              </HomeProvider>
            </CustomerProvider>
          </RouteNameContext.Provider>
        )}
      />
    );

    const cardClick = renderResult.getByTestId('BankBills');

    fireEvent.press(cardClick);

    expect(mockNavigation).toHaveBeenCalled();
  });
});
