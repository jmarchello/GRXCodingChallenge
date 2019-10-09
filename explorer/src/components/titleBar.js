import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from './icon';

const TitleBar = ({ title }) => (
  <TitleBarWrapper>
    <div className="title-bar-content">
      <span>{ title }</span>
      <Icon type='close' className="close-icon" />
    </div>
  </TitleBarWrapper>
);

TitleBar.propTypes = {
  title: PropTypes.string
};

export default TitleBar;

const TitleBarWrapper = styled.div`
  background-color: #f5f5f5;
  padding: 1rem;
  border: solid 1px #e8e8e8;

  & .title-bar-content {
    height: 1rem;
    display: flex;
    flex-direction: row;

    & span {
      color: #4c4c4c;
      flex: 1;
    }

    & .close-icon {
      opacity: .3;
    }
  }
`;
