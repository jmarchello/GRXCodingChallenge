import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from './icon';

const FileRow = ({ entry, depth=0 }) => {
  const [isOpen, setOpen] = useState(false);
  const iconType = (entry.private && entry.type === 'folder')
    ? 'private-folder'
    : entry.type

  return (
    <FileRowWrapper depth={depth}>
      <div className="row" onClick={() => setOpen(!isOpen)} >
        <div className="inner-row">
          {
            entry.type === 'folder'
              && <Icon
                  type={ isOpen ? 'expanded-list' : 'collapsed-list' }
                  className="row-icon collapse-icon"
                />
          }

          <Icon type={iconType} className="row-icon" />
          <span>{entry.name || '[unkown]'}</span>
        </div>
      </div>

      {
        entry.children && isOpen
        && entry.children.map(child => (
          <FileRow entry={child} depth={depth + 1}/>
        ))
      }

    </FileRowWrapper>
  );
};

FileRow.propTypes = {
  entry: PropTypes.object,
  depth: PropTypes.number
}

export default FileRow;

const columnWidth = 1.5

const FileRowWrapper = styled.div`
  & .row:hover {
    background-color: #5286ec;
  }

  & .inner-row {
    margin-left: ${({depth}) => depth * columnWidth}em;
    display: flex;
    padding: .5rem 1rem;
    color: #989898;

    &:hover {
      color: white;
    }

    & .row-icon {
      flex: 0 0 ${columnWidth}em;
    }

    & .collapse-icon {
      opacity: .3;
      cursor: pointer;
    }

    & span {
      flex: 1;
      font-size: .75rem;
    }
  }
`;
