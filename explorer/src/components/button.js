import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({children, onClick= () => {} }) => (
  <ButtonWrapper>
    <button onClick={onClick}>
      {children}
    </button>
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func
};

export default Button;

const ButtonWrapper = styled.div`
  & button {
    padding: .5rem 1rem;
    color: white;
    background-color: #5286ec;
    border: solid 1px #4a79d5;
    border-radius: 3px;
    cursor: pointer;
  }
`;
