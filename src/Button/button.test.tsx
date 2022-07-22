import React from 'react';
import * as ReactDOM from 'react-dom';
import { Primary } from './Button.stories';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Primary />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});