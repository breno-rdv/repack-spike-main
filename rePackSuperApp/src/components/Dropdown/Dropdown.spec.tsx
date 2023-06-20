import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { Dropdown } from './Dropdown';
import { fireEvent, render } from '../../../../../p1p3-mobile/src/test';
import { MockedNavigator } from '../../../../../p1p3-mobile/src/test/MockNavigator';

describe('My Dropdown ', function () {
  let testID: string;
  let label: string;
  let data: string[];
  let selected: string;
  let setSelected: React.Dispatch<React.SetStateAction<string>>;
  let transformFunction: (string) => string;

  beforeEach(async () => {
    testID = 'IncomeTax';
    label = 'Fiscal Year';
    data = ['2019', '2020', '2021'];
    selected = '2019';
    setSelected = jest.fn();
    transformFunction = jest.fn();
  });
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render dropdown correctly', async () => {
    const testRenderer = renderer.create(
      <Dropdown
        testID={testID}
        label={label}
        data={data}
        selected={selected}
        setSelected={setSelected}
        transformFunction={transformFunction}
      />
    );

    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({ testID: testID })).toBeTruthy();
    expect(testInstance.findByProps({ testID: 'label' }).props.children).toEqual(label);
    expect(testInstance.findByProps({ testID: testID + '_button' }).props.children).toBeTruthy();
  });

  it('should be clickable', async () => {
    const testRenderer = render(
      <MockedNavigator
        component={() => (
          <Dropdown
            testID={testID}
            label={label}
            data={data}
            selected={selected}
            setSelected={setSelected}
            transformFunction={transformFunction}
          />
        )}
      />
    );

    const dropdownButton = testRenderer.getByTestId('IncomeTax');

    fireEvent.press(dropdownButton);

    const clickable = testRenderer.getByTestId(testID + '2021_itemButton');

    fireEvent.press(clickable);

    expect(setSelected).toHaveBeenCalledTimes(1);
  });
});
