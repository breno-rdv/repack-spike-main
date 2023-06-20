import React from 'react';
import 'react-native';
import { render } from 'react-native-testing-library';
import { JudicialErrorPage } from './JudicialErrorPage';

describe('Judicial Error Page', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const defaultProps = {
    errorTitle: 'Judicial title',
    errorSubtitle: 'Judicial subtitle',
  };

  const renderComponent = (ownProps: Record<string, any> = {}) =>
    render(<JudicialErrorPage {...defaultProps} {...ownProps} />);

  it('should render component properly', async () => {
    const testRenderer = await renderComponent();

    expect(testRenderer.getByTestId('errorTitle').children).toEqual([defaultProps.errorTitle]);
    expect(testRenderer.getByTestId('errorSubtitle').children).toEqual([defaultProps.errorSubtitle]);
  });
});
