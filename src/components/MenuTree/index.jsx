import React from 'react';
import PropTypes from 'prop-types';
import MenuNode from './MenuNode';

// const exampleData = {
//   '/root': {
//     path: '/root',
//     type: 'folder',
//     isRoot: true,
//     children: ['/root/david', '/root/jslancer']
//   },
//   '/root/david': {
//     path: '/root/david',
//     type: 'folder',
//     children: ['/root/david/readme.md']
//   }
// }

const MenuTree = ({ data }) => {
  const [nodes, setNodes] = React.useState(data);
  React.useEffect(() => {
    setNodes(data);
  }, [data]);

  const getRootNodes = () => {
    return Object.values(nodes).filter(node => node.isRoot === true);
  };

  const getChildNodes = node => {
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  };

  const onToggle = node => {
    nodes[node.path].isOpen = !node.isOpen;
    console.log('TOGGLE!');
    setNodes({ ...nodes });
  };

  return (
    <div>
      {getRootNodes().map(node => (
        <MenuNode
          key={node.path}
          node={node}
          getChildNodes={getChildNodes}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

MenuTree.propTypes = {
  data: PropTypes.object.isRequired
};

MenuTree.defaultProps = {
  data: null
};

export default MenuTree;
