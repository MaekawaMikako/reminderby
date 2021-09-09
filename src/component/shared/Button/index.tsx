import { ComponentPropsWithRef } from 'react';
import './styles.css';

interface Props extends ComponentPropsWithRef<'button'> {
  size?: 'small' | 'midium';
  color?: 'primary' | 'secondary';
}

export const Button = ({
  size = 'midium',
  color = 'primary',
  children,
  ...props
}: Props): JSX.Element => {
  return (
    <button className={['base', size, color].join(' ')} {...props}>
      {children}
    </button>
  );
};
