import React from 'react';
import MarkdownBrowser from './components/MarkdownBrowser'
import { GithubContextProvider } from './components/GithubContext'

function App() {
  return (
    <GithubContextProvider root="https://raw.githubusercontent.com/jkhoel/github-readme-viewer/master" rootFile="/README.md">
      <MarkdownBrowser />
    </GithubContextProvider>
  );
}

export default App;


