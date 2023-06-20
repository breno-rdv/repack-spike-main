import * as React from 'react';
import { render, fireEvent } from '../../p1p3-mobile/src/test';
import { OnboardInput } from 'src/components/OnboardInput/OnboardInput';

describe('<OnboardInput />', () => {
  const defaultProps = {
    testID: 'onboard-input',
    label: 'input',
    placeholder: 'input',
    onPressEnter: jest.fn(),
    isLoading: false,
    fieldMask: '',
    keepMask: false,
    validation: jest.fn(),
    inputLength: 10,
    keyboardType: 'email-address',
    optionalField: true,
    isError: false,
    setIsError: jest.fn(),
    errorMessage: 'error',
    secureTextEntry: '',
    customComponent: false,
    autoCapitalize: '',
    buttonText: 'button',
    removeSpaces: true,
		removeLetterWithAccent: false,
  };

  const renderComponent = (ownProps?: Record<string, any>) => render(<OnboardInput {...defaultProps} {...ownProps} />);

  it('should fill field correctly when type be email', () => {
    const { queryByTestId } = renderComponent();
    const input = queryByTestId('onboard-input');

    fireEvent.changeText(input, 'mail@ mail. com');

    expect(input.props.value).toBe('mail@mail.com');
  });

  it('should fill field correctly when type be default', () => {
    const { queryByTestId } = renderComponent({ removeSpaces: undefined });
    const input = queryByTestId('onboard-input');

    fireEvent.changeText(input, 'John Deere');

    expect(input.props.value).toBe('John Deere');
  });

	it('should remove accents if removeLetterWithAccent be true', () => {
		const { queryByTestId } = renderComponent({ removeLetterWithAccent: true, removeSpaces: false });
		const input = queryByTestId('onboard-input');

		fireEvent.changeText(input, 'ú de perfume');

		expect(input.props.value).toBe('u de perfume');
	});
});
