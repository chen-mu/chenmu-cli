// stories/index.js

import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import { CheckBox } from '../src/compontents/index'
import { withInfo } from '@storybook/addon-info';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));

storiesOf('CheckBox', module)
  .addDecorator(withInfo)
  .add('不可点', () => (
    <CheckBox status={status} disable={true} />
  ))
  .add('可点', () => (
    <CheckBox status={status} />
  ), {
    demo: '1'
  });