import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = ({ label }) => (
  <HeaderWrapper>
    <div>
      {label}
    </div>
  </HeaderWrapper>
);

Header.propTypes = {
  label: PropTypes.string
}

export default Header;

const HeaderWrapper = styled.div`
  padding: .75rem;
  border-bottom: solid 1px #e8e8e8;

  & div {
    min-height: 1em;
    font-size: .75em;
    color: #b2b2b2;
  }
`;
