import React from 'react';
import MarkdownBrowser from './components/MarkdownBrowser'
import { GithubContextProvider } from './components/GithubContext'

function App() {
  return (
    <GithubContextProvider root="https://raw.githubusercontent.com/132nd-vWing/OPUF-Brief/readme-patch-1" rootFile="/README.md">
      <MarkdownBrowser />
    </GithubContextProvider>
  );
}

export default App;


