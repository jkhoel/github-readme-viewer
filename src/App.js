import React from 'react';
import { Grid, GridItem } from 'styled-grid-component';
import MarkdownBrowser from './components/MarkdownBrowser';
import { GithubContextProvider } from './components/GithubContext';
import { ImageModalContextProvider } from './components/ImageModalContext';
import RepoMenu from './components/RepoMenu';
import ImageModal from './components/ImageModalContext/ImageModal';

function App() {
  return (
    <ImageModalContextProvider>
      <Grid
        width="100%"
        height="100vh"
        templateColumns="repeat(5, 1fr)"
        gap="10px"
        autoRows="minmax(100px, auto)"
      >
        <GithubContextProvider
          root="https://raw.githubusercontent.com/132nd-vWing/OPUF-Brief/master"
          rootFile="/README.md"
        >
          <GridItem column="1" row="1">
            <RepoMenu root="https://api.github.com/repos/132nd-vWing/OPUF-Brief/contents/" />
          </GridItem>
          <GridItem column="2 / 6" row="1">
            <MarkdownBrowser />
          </GridItem>
          <GridItem column="2 / 6" row="1">
            <ImageModal />
          </GridItem>
        </GithubContextProvider>
      </Grid>
    </ImageModalContextProvider>
  );
}

export default App;
