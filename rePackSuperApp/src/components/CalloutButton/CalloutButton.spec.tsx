import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { CalloutButton } from './CalloutButton';
import { Linking } from 'react-native';

describe('<CalloutButton />', () => {
  beforeAll(() => {
    jest.spyOn(Linking, 'openURL');
  });

  const defaultProps = {
    action: jest.fn(),
    message: 'Click me',
    testID: 'calloutButton',
  };

  const renderComponent = (ownProps?: Record<string, any>) => render(<CalloutButton {...defaultProps} {...ownProps} />);

  it('should render correctly', async () => {
    const renderResult = await renderComponent();

    expect(renderResult.getByTestId('calloutButtonText').children).toEqual(['Click me']);
  });

  it('should fire action when button be clicked', async () => {
    const mockAction = () => Linking.openURL('http://localhost');
    const renderResult = await renderComponent({ action: mockAction() });

    const button = renderResult.getByTestId('calloutButton');
    fireEvent.press(button);

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith('http://localhost');
  });
});
