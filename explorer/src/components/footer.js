import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './button';

const Footer = ({ children, onClose=() => {} }) => (
  <FooterWapper>
    <div>
      {children}
      <span className="spacer"></span>
      <Button onClick={onClose}>Done</Button>
    </div>
  </FooterWapper>
);

Footer.propTypes = {
  children: PropTypes.any,
  onClose: PropTypes.func
};

export default Footer;

const FooterWapper = styled.div`
  padding: .75rem;
  border-top: solid 1px #e8e8e8;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    min-height: 1em;
    font-size: .75em;
    color: #b2b2b2;

    & .spacer {
      flex: 1;
    }
  }
`;
