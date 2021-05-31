import styled from 'styled-components';
import React, { MouseEventHandler } from 'react';
import Icon from './Icon';
import type { IconType } from './Icon';
import { Link } from 'react-router-dom';

interface IProps {
  size?: number;
  child: any;
  onClick?: MouseEventHandler;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'error'
    | 'outline';
  icon?: IconType;
  type?: 'submit' | 'reset' | 'button';
}

const Button: React.FC<IProps> = ({
  size,
  child,
  onClick,
  color,
  icon,
  type,
}) => {
  return (
    <StyledButton
      size={size}
      type={type}
      color={color}
      onClick={onClick}
    >
      {icon && <Icon size={20} name={icon} />}
      {child}
    </StyledButton>
  );
};

type StyledButtonProps = Pick<IProps, 'color' | 'size'>;

const StyledButton = styled.button<StyledButtonProps>`
  width: ${(props) => (props.size ? props.size + '%' : 'auto')};
  font-size: var(--global-font-size);
  color: #fff;
  color: ${(props) =>
    props.color === 'secondary'
      ? 'var(--global-color-secondary)'
      : 'white'};
  background-color: ${(props) =>
    props.color === 'primary'
      ? 'var(--global-color-primary)'
      : props.color === 'secondary'
      ? 'inherit'
      : props.color === 'success'
      ? 'var(--global-color-success)'
      : props.color === 'warning'
      ? 'var(--global-color-warning)'
      : props.color === 'error'
      ? 'var(--global-color-error)'
      : 'var(--global-color-primary)'};
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  border: ${(props) =>
    props.color === 'secondary'
      ? '1px solid var(--global-color-secondary)'
      : '1px solid transparent'};
  padding: 0.375rem 0.75rem;
  margin: 2%;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${(props) =>
      props.color === 'primary'
        ? 'var(--global-color-primary-darken)'
        : props.color === 'secondary'
        ? 'var(--global-color-secondary-darken)'
        : props.color === 'success'
        ? 'var(--global-color-success-darken)'
        : props.color === 'warning'
        ? 'var(--global-color-warning-darken)'
        : props.color === 'error'
        ? 'var(--global-color-error-darken)'
        : 'var(--global-color-primary-darken)'};
  }
`;

export default Button;
