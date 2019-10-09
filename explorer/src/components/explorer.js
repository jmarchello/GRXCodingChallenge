import React from 'react';
import styled from 'styled-components';
import TitleBar from './titleBar';
import Header from './header';
import FileTree from './fileTree';
import Footer from './footer';
import data from '../data.json';

const Explorer = () => {
  return (
    <ExplorerWrapper>
      <div id="explorer">
        <TitleBar title="Title" />
        <Header label="Label" />
        <FileTree fileData={data} />
        <Footer />
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
    flex: 0 0 340px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 20px 50px 15px lightgray;
    height: 640px;
    width: 340px;
    border: solid lightgray 1px;
    border-radius: 10px;
    background-color: white;
  }
`
