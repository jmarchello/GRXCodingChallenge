import React from 'react';
import styled from 'styled-components';
import TitleBar from './titleBar';

const Explorer = () => {
  return (
    <ExplorerWrapper>
      <div id="explorer">
        <TitleBar title="Title" />
      </div>
    </ExplorerWrapper>
  );
}

export default Explorer;

const ExplorerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;

  & #explorer {
    flex: 0 0 320px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 50px 15px lightgray;
    height: 640px;
    border: solid lightgray 1px;
    border-radius: 5px;
    background-color: white;
  }
`
