import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FileRow from './fileRow';

const FileTree = ({ fileData }) => {
  return (
    <FileTreeWrapper>
      {
        fileData.children.map(child => (
          <FileRow entry={child} />
        ))
      }
    </FileTreeWrapper>
  );
};

FileTree.propTypes = {
  fileData: PropTypes.object
}

export default FileTree;

const FileTreeWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem 0;
  overflow: scroll;
`;
