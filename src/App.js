import React from 'react';
import { Grid, GridItem } from 'styled-grid-component';
import MarkdownBrowser from './components/MarkdownBrowser';
import { GithubContextProvider } from './components/GithubContext';
import RepoMenu from './components/RepoMenu';

function App() {
  return (
    <Grid
      width="100%"
      height="100vh"
      templateColumns="repeat(5, 1fr)"
      gap="10px"
      autoRows="minmax(100px, auto)"
    >
      <GithubContextProvider
        root="https://raw.githubusercontent.com/jkhoel/github-readme-viewer/master"
        rootFile="/README.md"
      >
        <GridItem column="1" row="1">
          <RepoMenu root="https://api.github.com/repos/jkhoel/github-readme-viewer/contents/" />
        </GridItem>
        <GridItem column="2 / 6" row="1">
          <MarkdownBrowser />
        </GridItem>
      </GithubContextProvider>
    </Grid>
  );
}

export default App;
