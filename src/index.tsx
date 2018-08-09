import { Input } from 'antd';
import * as React from 'react';
import { render } from 'react-dom';

import { LocalInput } from './LocalInput';

const App = () => (
  <div>
    <LocalInput />
    <Input type="text" />
  </div>
);

render(<App />, document.getElementById('root'));
