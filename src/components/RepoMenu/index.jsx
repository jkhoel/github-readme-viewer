import React from 'react';
import PropTypes from 'prop-types';
import MenuTree from './MenuTree';

const exampleData = {
  '/root': {
    path: '/root',
    type: 'folder',
    isRoot: true,
    children: ['/root/david', '/root/jslancer']
  },
  '/root/david': {
    path: '/root/david',
    type: 'folder',
    children: ['/root/david/readme.md']
  },
  '/root/david/readme.md': {
    path: '/root/david/readme.md',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  '/root/jslancer': {
    path: '/root/jslancer',
    type: 'folder',
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs']
  },
  '/root/jslancer/projects': {
    path: '/root/jslancer/projects',
    type: 'folder',
    children: ['/root/jslancer/projects/treeview']
  },
  '/root/jslancer/projects/treeview': {
    path: '/root/jslancer/projects/treeview',
    type: 'folder',
    children: []
  },
  '/root/jslancer/vblogs': {
    path: '/root/jslancer/vblogs',
    type: 'folder',
    children: []
  }
};

// This component needs to build the data object with data from the Repo, and then pass that to the MenuTree component

const RepoMenu = ({ root }) => {
  const [endpoint, setEndpoint] = React.useState(root);

  const [data, setData] = React.useState(exampleData);
  React.useEffect(() => {
    if (endpoint) {
      // do some aixios shit, then build the data object and run setNodes
    }
  }, [endpoint]);

  if (data) return <MenuTree data={data} />;

  return null;
};

RepoMenu.propTypes = {
  root: PropTypes.string.isRequired
};

RepoMenu.defaultProps = {
  root: null
};

export default RepoMenu;
