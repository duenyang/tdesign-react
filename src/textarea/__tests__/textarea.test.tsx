import React from 'react';
import { testExamples, render } from '@test/utils';
import Textarea from '../Textarea';

// 测试组件代码 Example 快照
testExamples(__dirname);

const textareaText = 'textarea test';

describe('Textarea', () => {
  test('render correct width value', () => {
    const { container, asFragment } = render(<Textarea value={textareaText}></Textarea>);
    expect(container.firstChild.classList.contains('t-textarea')).toBeTruthy();
    expect(container.querySelector('textarea').value).toEqual(textareaText);
    expect(asFragment()).toMatchSnapshot();
  });
});
