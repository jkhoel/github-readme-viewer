import React from 'react';
import PropTypes from 'prop-types';
import MenuNode from './MenuNode';

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
      {new Date().getTime()}
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
