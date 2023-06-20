import * as React from 'react';
import { Linking } from 'react-native';
import { render, fireEvent } from '../../p1p3-mobile/src/test';
import { ErrorPage } from 'src/components/Error/index';

describe('<ErrorPage />', () => {
  beforeAll(() => {
    jest.spyOn(Linking, 'openURL');
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    hideButton: false,
    hideErrorInstructions: false,
    hideWarning: false,
    onRefresh: jest.fn(),
    icon: null,
    title: '',
    subtitle: '',
  };

  const renderComponent = (ownProps?: Record<string, any>) => render(<ErrorPage {...defaultProps} {...ownProps} />);

  it('should render correctly', () => {
    const { queryByText, queryByTestId } = renderComponent();

    expect(queryByTestId('error-page-try-again-button')).toBeTruthy();
    expect(queryByTestId('description')).toBeTruthy();
    expect(queryByText(/persists/i)).toBeTruthy();
    expect(queryByText(/e-mail/i)).toBeTruthy();
    expect(queryByText(/BJD-FaleConosco@JohnDeere.com/i)).toBeTruthy();
  });

  it('should not render Warning component and render Icon', () => {
    const { queryByTestId } = renderComponent({ hideWarning: true });

    expect(queryByTestId('description')).toBeNull();
    expect(queryByTestId('error-page-icon')).toBeTruthy();
  });

  it('should render title and subtitle', () => {
    const { queryByText } = renderComponent({ title: 'title', subtitle: 'subtitle' });

    expect(queryByText(/^title$/)).toBeTruthy();
    expect(queryByText(/subtitle/i)).toBeTruthy();
  });

  it('should not render button', () => {
    const { queryByTestId } = renderComponent({ hideButton: true });

    expect(queryByTestId('error-page-try-again-button')).toBeNull();
  });

  it('should not render button', () => {
    const { queryByTestId } = renderComponent({ hideErrorInstructions: true });

    expect(queryByTestId('hide-instructions-contact-info')).toBeTruthy();
  });

  it('should fire action when clicking on TryAgain button', () => {
    const { queryByTestId } = renderComponent();

    const tryAgainButton = queryByTestId('error-page-try-again-button');
    fireEvent.press(tryAgainButton);

    expect(defaultProps.onRefresh).toHaveBeenCalledTimes(1);
  });

  it('should fire action when clicking on phone number', () => {
    const { queryByText } = renderComponent();

    const phoneLink = queryByText(/0800/i);
    fireEvent.press(phoneLink);

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
  });

  it('should fire action when clicking on phone number', () => {
    const { queryByText } = renderComponent();

    const emailLink = queryByText(/BJD-FaleConosco@JohnDeere.com/i);
    fireEvent.press(emailLink);

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
  });
});
