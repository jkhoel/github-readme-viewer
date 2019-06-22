import React from 'react';
import PropTypes from 'prop-types';
import MenuTree from '../MenuTree';
import Axios from 'axios';

const createNode = (node, isRoot) => {
  return {
    path: node.path,
    name: node.name,
    type: node.type,
    isRoot: isRoot,
    children: [],
    url: node.url,
    download_url: node.download_url
  };
};

async function getFileTree(endpoint, level, result = [], parent = null) {
  // Find all items at the current endpoint and make nodes
  const files = await Axios(endpoint)
    .then(res => res.data)
    .then(data => {
      let nodes = [];
      data.forEach(node => {
        // Create a node for each object found at the endpoint
        let n = createNode(node, level > 0 ? false : true);
        // if the current object has a parent, then add this node as a child to that parent
        if (parent) parent.push(n.path);
        // push the new node to result
        result.push(n);
        nodes.push(n);
      });
      return nodes;
    });

  // See if any of the items at the current endpoint are directories, if so - recursively get the content
  await files.forEach(node => {
    if (node.type === 'dir') {
      getFileTree(node.url, level + 1, result, node.children);
    }
  });

  return result;
}

const RepoMenu = ({ root }) => {
  const [endpoint] = React.useState(root);

  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    if (endpoint) {
      getFileTree(endpoint, 0).then(res => {
        setData(res);
      });
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
