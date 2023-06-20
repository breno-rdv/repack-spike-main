import React from 'react';
import 'react-native';
import { fireEvent } from '../../../../../p1p3-mobile/src/test';
import { render } from 'react-native-testing-library';
import { EmptyStateScreen } from './EmptyStateScreen';
import { Linking } from 'react-native';

describe('Empty State Screen', () => {
  beforeEach(() => {
    jest.spyOn(Linking, 'openURL');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    emailBody: 'Body',
    emailSubject: 'Subject',
    title: 'Empty title',
    subtitle: 'Empty subtitle',
  };

  const renderComponent = (ownProps: Record<string, any> = {}) =>
    render(<EmptyStateScreen {...defaultProps} {...ownProps} />);

  it('should render component properly', async () => {
    const testRenderer = await renderComponent();

    expect(testRenderer.getByTestId('emptyStateScreenTitle').children).toEqual([defaultProps.title]);
    expect(testRenderer.getByTestId('emptyStateScreenSubtitle').children).toEqual([defaultProps.subtitle]);
    expect(testRenderer.getByTestId('emptyStateScreenPhone').children).toEqual(['0800 723 3464']);
    expect(testRenderer.getByTestId('emptyStateScreenEmail').children).toEqual(['BJD-FaleConosco@JohnDeere.com']);
  });

  it('should open phone url when clicking on phone number', async () => {
    const testRenderer = await renderComponent();

    const phoneLink = testRenderer.getByTestId('emptyStateScreenPhone');
    fireEvent.press(phoneLink);

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith('tel:08007233464');
  });

  it('should open email url when clicking on email address', async () => {
    const testRenderer = await renderComponent();

    const emailLink = testRenderer.getByTestId('emptyStateScreenEmail');
    fireEvent.press(emailLink);

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith('mailto:BJD-FaleConosco@JohnDeere.com?subject=Subject&body=Body');
  });
});
