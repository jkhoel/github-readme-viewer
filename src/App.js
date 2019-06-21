import React from 'react';
import GitReadme from './components/GitReadme'
import { GithubContextProvider } from './components/GithubContext'

function App() {
  return (
    <GithubContextProvider endpoint="https://api.github.com/repos/132nd-vWing/OPUF-Brief/readme">
      <GitReadme />
    </GithubContextProvider>
  );
}

export default App;


