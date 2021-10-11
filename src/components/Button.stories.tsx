import { Story } from '@storybook/react';

import { Button, ButtonProps } from './Button';

type ButtonStory = Story<ButtonProps>;

export default {
  component: Button,
  title: 'Button',
};

export const Primary: ButtonStory = Button.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary Button',
  pill: false,
};

export const Secondary: ButtonStory = Button.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Button secondary',
  pill: true,
};

export const Pill: ButtonStory = Button.bind({});
Pill.args = {
  variant: 'secondary',
  pill: true,
  children: 'Button Pill',
};

export const WithTheme: ButtonStory = Button.bind({});
WithTheme.args = {
  variant: 'primary',
  pill: true,
  withTheme: true,
  children: 'Button with theme',
};
