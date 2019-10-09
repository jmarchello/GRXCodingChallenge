import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LabelBar = ({ label }) => (
  <LabelBarWrapper>
    <div>
      {label}
    </div>
  </LabelBarWrapper>
);

LabelBar.propTypes = {
  label: PropTypes.string
}

export default LabelBar;

const LabelBarWrapper = styled.div`
  padding: .75rem;
  border-bottom: solid 1px #e8e8e8;

  & div {
    min-height: 1em;
    font-size: .75em;
    color: #b2b2b2;
  }
`;
