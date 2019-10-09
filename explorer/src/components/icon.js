import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import sprite from '../images/icon-sprite.png';

const iconLocations = {
  "folder": "0",
  "private-folder": "-14px",
  "file": "-28px",
  "close": "-42px",
  "collapsed-list": "-56px",
  "expanded-list": "-70px"
}

const Icon = (props) => (
  <IconWrapper {...props}>
    <div className="icon"></div>
  </IconWrapper>
);

Icon.propTypes = {
  type: PropTypes.string.isRequired
}

export default Icon;

const IconWrapper = styled.div`
  & .icon {
    height: 14px;
    width: 14px;
    background: url(${sprite}) no-repeat;
    background-position-x: ${({type}) => iconLocations[type]};
  }
`;

