import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TitleBar = ({ title }) => (
  <TitleBarWrapper>
    <div className="title-bar-content">
      <span>{ title }</span>
      <img src={} />
    </div>
  </TitleBarWrapper>
);

TitleBar.propTypes = {
  title: PropTypes.string
};

export default TitleBar;

const TitleBarWrapper = styled.div`
  height: 1rem;
  background-color: #f5f5f5;
  padding: 1rem;

  & .title-bar-content {
    display: flex;
    flex-direction: row;
  }
`;
