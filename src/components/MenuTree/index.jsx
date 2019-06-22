import React from 'react';
import PropTypes from 'prop-types';
import MenuNode from './MenuNode';
import styled from 'styled-components';

const StyledTreeContainer = styled.div`
  // display: flex;
  // flex-direction: right;
  // align-items: center;
  // padding: 5px 8px;
  // padding-left: 5px;

  // &:hover {
  //   background: lightgray;
  // }

  background-color: #252526;
  font-color: white;
`;

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
    return node.children.map(path =>
      Object.values(nodes).find(el => el.path === path)
    );
  };

  const onToggle = node => {
    let indexOfParent = Object.values(nodes).findIndex(
      el => el.path === node.path
    );
    nodes[indexOfParent].isOpen = !node.isOpen;
    setNodes({ ...nodes });
  };

  return (
    <StyledTreeContainer>
      {getRootNodes().map(node => (
        <MenuNode
          key={node.path}
          node={node}
          getChildNodes={getChildNodes}
          onToggle={onToggle}
        />
      ))}
    </StyledTreeContainer>
  );
};

MenuTree.propTypes = {
  data: PropTypes.array.isRequired
};

MenuTree.defaultProps = {
  data: null
};

export default MenuTree;
