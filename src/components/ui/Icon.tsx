import iconNames from 'bootstrap-icons/font/bootstrap-icons.json';
import styled from 'styled-components';

export type IconType = keyof typeof iconNames;

interface IProps {
  className?: string;
  color?: string;
  name: IconType;
  size?: number;
}

const Icon = ({ className, name, color, size }: IProps) => (
  <StyledIcon
    color={color}
    size={size}
    className={`bi bi-${name} ${className ?? ''}`}
  />
);

type StyledIconProps = Pick<IProps, 'color' | 'size'>;

const StyledIcon = styled.i<StyledIconProps>`
  color: ${(props) => (props.color ? props.color : 'inherit')};
  font-size: ${(props) => (props.size ? props.size + 'px' : '1em')};
  padding: 0 0.5rem 0 0;
`;

export default Icon;
