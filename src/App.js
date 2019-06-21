import React from 'react';
import MarkdownBrowser from './components/MarkdownBrowser'
import { GithubContextProvider } from './components/GithubContext'
import RepoMenu from './components/RepoMenu'

function App() {
  return (
    <GithubContextProvider root="https://raw.githubusercontent.com/jkhoel/github-readme-viewer/master" rootFile="/README.md">
      <RepoMenu root="https://raw.githubusercontent.com/jkhoel/github-readme-viewer/master" />
      <MarkdownBrowser />
    </GithubContextProvider>
  );
}

export default App;


