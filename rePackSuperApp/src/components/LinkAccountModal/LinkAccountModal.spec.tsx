import React from 'react';
import { CustomerProvider } from '../../../../../p1p3-mobile/src/contexts/CustomerContext/CustomerContext';
import { RouteNameContext } from '../../../../../p1p3-mobile/src/contexts/RouteNameContext/RouteNameContext';
import { HomeProvider } from '../../../../../p1p3-mobile/src/scenes/HomeScene/HomeContext';
import { BankBillService } from '../../../../../p1p3-mobile/src/services/BankBillService/bankBillService';
import { CreditLimitService } from '../../../../../p1p3-mobile/src/services/CreditLimitService/creditLimitService';
import { CustomerService } from '../../../../../p1p3-mobile/src/services/CustomerService/customerService';
import { render } from '../../../../../p1p3-mobile/src/test';
import { MockedNavigator } from '../../../../../p1p3-mobile/src/test/MockNavigator';
import { LinkAccountModal } from './LinkAccountModal';

describe('Link Account Modal ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const renderResult = render(
      <MockedNavigator
        component={() => (
          <RouteNameContext.Provider value={{ routeName: 'Home', setRouteName: jest.fn() }}>
            <CustomerProvider customerService={CustomerService.getInstance()}>
              <HomeProvider
                bankBillService={BankBillService.getInstance()}
                creditLimitService={CreditLimitService.getInstance()}
              >
                <LinkAccountModal
                  titleMessage={'Test'}
                  buttonText={'Button Test'}
                  secondaryButtonText={'Secondary Button Test'}
                  sceneName={'Home'}
                  modalVisible={false}
                  onPress={() => {}}
                  onPressButton={() => {}}
                />
              </HomeProvider>
            </CustomerProvider>
          </RouteNameContext.Provider>
        )}
      />
    );

    expect(renderResult.getByTestId('linkAccountModal')).toBeTruthy();
  });
});
