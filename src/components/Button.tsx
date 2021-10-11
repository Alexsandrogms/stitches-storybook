import { ComponentProps } from 'react';

import { lightTheme } from '../styles';

import { Container } from './styles';

export type ButtonProps = ComponentProps<typeof Container> & {
  withTheme?: boolean;
};

export const Button = ({
  children,
  withTheme = false,
  ...rest
}: ButtonProps) => (
  <div className={withTheme ? lightTheme : undefined}>
    <Container {...rest}>{children || 'Button'}</Container>
  </div>
);
