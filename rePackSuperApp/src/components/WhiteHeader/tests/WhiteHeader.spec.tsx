import React from 'react';
import { render, fireEvent } from '../../../../../../p1p3-mobile/src/test';
import { WhiteHeader } from '../WhiteHeader';

describe('<WhiteHeader />', () => {
  const defaultProps = {
    action: jest.fn(),
    title: 'White Header',
  };

  it('should render properly', () => {
    const { queryByTestId } = render(<WhiteHeader {...defaultProps} />);

    expect(queryByTestId('white-header-title').children).toEqual(['White Header']);
  });

  it('should fire action when header icon be clicked', () => {
    const { queryByTestId } = render(<WhiteHeader {...defaultProps} />);

    const headerIcon = queryByTestId('header-icon-touchable');
    fireEvent.press(headerIcon);

    expect(defaultProps.action).toHaveBeenCalledTimes(1);
  });
});
