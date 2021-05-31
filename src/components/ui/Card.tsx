import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styled from 'styled-components';
import Input from './Input';

const getRandomIntInclusive = (min: number, max: number): Number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

interface IProps {
  id?: number;
  title?: string;
  subtitle?: string;
  addInput?: any;
  completed?: boolean | string;
  showCompleted?: boolean;
  destination?: string;
  deleteMe?: any;
  takeMeBack?: boolean;
  a?: string;
  b?: string;
}

const Card: React.FC<IProps> = ({
  id,
  title,
  subtitle,
  addInput,
  completed,
  showCompleted,
  destination,
  deleteMe,
  takeMeBack,
  a,
  b,
}) => {
  return (
    <StyledCard>
      <img
        loading='lazy'
        src={`https://picsum.photos/400/100/?random=${getRandomIntInclusive(
          1,
          200
        )}`}
        alt='img'
      />
      {id && (
        <h3>
          <b>ID:</b> {id}
        </h3>
      )}
      {title && <p>{title}</p>}
      {subtitle && <h2>{subtitle}</h2>}
      {addInput && <p>{addInput}</p>}
      {showCompleted && (
        <p>
          <b>Completed:</b> {completed ? `true` : `false`}
        </p>
      )}
      <p>
        {destination && (
          <Button
            color='warning'
            child={<Link to={destination}>details</Link>}
            icon='eye'
          />
        )}
        {deleteMe && (
          <Button
            color='error'
            onClick={deleteMe}
            child='delete'
            icon='trash'
          />
        )}
        {takeMeBack && (
          <Button
            color='success'
            child={<Link to='/'>take me back</Link>}
            icon='arrow-left'
          />
        )}
      </p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  min-height: 450px;
  margin: 2%;

  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.12);
  border-radius: 4px;

  text-align: center;

  img {
    width: 100%;
  }
`;

export default Card;
