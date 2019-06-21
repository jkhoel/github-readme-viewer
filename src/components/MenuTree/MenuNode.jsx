import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  FiChevronRight,
  FiChevronDown,
  FiFile,
  FiFolder
} from 'react-icons/fi';

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  if (type === 'file') paddingLeft += 20;
  return paddingLeft;
};

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: right;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;

  &:hover {
    background: lightgray;
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => (props.marginRight ? props.marginRight : 5)}px;
  cursor: pointer;
`;

const MenuNode = ({ node, getChildNodes, level, onToggle }) => {
  return (
    <React.Fragment>
      <StyledTreeNode level={level} type={node.type}>
        <NodeIcon onClick={() => onToggle(node)}>
          {node.type === 'folder' &&
            (node.isOpen ? <FiChevronDown /> : <FiChevronRight />)}
        </NodeIcon>
        <NodeIcon marginRight={10}>
          {node.type === 'file' && <FiFile />}
          {node.type === 'folder' && node.isOpen && <FiFolder />}
          {node.type === 'folder' && !node.isOpen && <FiFolder />}
        </NodeIcon>

        <span role="button">{node.path.split('/').pop()}</span>
      </StyledTreeNode>

      {node.isOpen &&
        getChildNodes(node).map(childNode => (
          <MenuNode
            key={childNode.path}
            node={childNode}
            level={level + 1}
            getChildNodes={getChildNodes}
            onToggle={onToggle}
          />
        ))}
    </React.Fragment>
  );
};

MenuNode.propTypes = {
  node: PropTypes.object.isRequired,
  level: PropTypes.number,
  getChildNodes: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired
};

MenuNode.defaultProps = {
  node: null,
  level: 0,
  getChildNodes: () => null,
  onToggle: () => null
};

export default MenuNode;
