import React from 'react';
import PropTypes from 'prop-types';
import MenuTree from '../MenuTree';
import Axios from 'axios';

const exampleData = [
  {
    path: '/root',
    type: 'dir',
    isRoot: true,
    children: ['/root/david', '/root/jslancer']
  },
  {
    path: '/root/david',
    type: 'dir',
    children: ['/root/david/readme.md']
  },
  {
    path: '/root/david/readme.md',
    type: 'file',
    content: 'Thanks for reading me me. But there is nothing here.'
  },
  {
    path: '/root/jslancer',
    type: 'dir',
    children: ['/root/jslancer/projects', '/root/jslancer/vblogs']
  },
  {
    path: '/root/jslancer/projects',
    type: 'dir',
    children: ['/root/jslancer/projects/treeview']
  },
  {
    path: '/root/jslancer/projects/treeview',
    type: 'dir',
    children: []
  },
  {
    path: '/root/jslancer/vblogs',
    type: 'dir',
    children: []
  }
];

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

const repoCrawler = (endpoint, level, onComplete) => {
  let results = [];

  Axios.get(endpoint).then(res => {
    let pending = res.data.length;
    if (!pending) return onComplete(null, results);
    res.data.forEach(node => {
      if (node.type === 'dir') {
        results.push(createNode(node, level > 0 ? false : true));
        repoCrawler(node.url, level + 1, (err, res) => {
          res.forEach(node => {
            let parent = node.path
              .split(node.name)
              .shift()
              .slice(0, -1);

            let indexOfParent = Object.values(results).findIndex(
              el => el.path === parent
            );

            if (indexOfParent > 0)
              results[indexOfParent].children.push(node.path);
          });
          results = results.concat(res);
          if (!--pending) onComplete(null, results);
        });
      } else {
        results.push(createNode(node, level > 0 ? false : true));
        if (!--pending) onComplete(null, results);
      }
    });
  });
};

const RepoMenu = ({ root }) => {
  const [endpoint] = React.useState(root);

  const [data, setData] = React.useState(exampleData);
  React.useEffect(() => {
    if (endpoint) {
      repoCrawler(endpoint, 0, (err, data) => {
        if (err) throw err;

        setData(data);
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
