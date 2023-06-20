import React from 'react';

import renderer from 'react-test-renderer';
import { Text } from 'react-native';
import { Input } from './Input';
import { act, fireEvent, render } from '../../../../../p1p3-mobile/src/test';

const setRef = jest.fn();

describe('My input ', function () {
  beforeEach(async () => {});
  beforeAll(async () => {});
  afterEach(async () => {});
  afterAll(async () => {});

  it('should render correctly', async () => {
    const testRenderer = renderer.create(<Input label="test" setRef={setRef} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Input)).toBeTruthy();
  });

  it('should have the label with test value', async () => {
    const testRenderer = renderer.create(<Input label="test" setRef={setRef} />);
    const testInstance = testRenderer.root;
    expect(testInstance.findByType(Input).findByType(Text).props.children).toEqual('test');
  });

  xit('should have text input with different border color if it is focused', async () => {
    const borderColorExpected = '#367C2B';

    const input = render(<Input label="test" setRef={setRef} />);
    await act(async () => {});

    const textInput = input.getByTestId('inputText');

    expect(textInput.props.style[1].borderColor).toEqual(borderColorExpected);
  });

  xit('should have text input with initial border color if it was focused and then blur', async () => {
    const borderColorExpected = '#54585A';

    const input = render(<Input label="test" setRef={setRef} />);
    await act(async () => {});

    const textInput = input.getByTestId('inputText');
    fireEvent.focus(textInput);
    fireEvent.blur(textInput);

    expect(textInput.props.style[1].borderColor).toEqual(borderColorExpected);
  });

	it('should remove characters with accents', () => {
		const input = render(<Input label="test" setRef={setRef} removeLetterWithAccent value="fundiê"/>);
		const textInput = input.getByTestId('inputText');

		expect(textInput.props.value).toEqual('fundie');
	});
});
