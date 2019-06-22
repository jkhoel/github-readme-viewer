import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  CaretDown,
  CaretRight,
  Hashtag,
  Folder,
  FolderOpen,
  FilePdf
} from 'styled-icons/fa-solid';

import { File } from 'styled-icons/boxicons-solid';

import {
  CodeCurly,
  CodeAlt,
  InfoCircle,
  Image
} from 'styled-icons/boxicons-regular';

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: right;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
  cursor: ${props => (props.type === 'dir' ? 'pointer' : 'inherit')};
  color: white;

  &:hover {
    background: #2a2d2e;
  }
`;

const NodeIcon = styled.div`
  font-size: 16px;
  margin-right: ${props => (props.marginRight ? props.marginRight : 5)}px;
  color: ${props => (props.color ? props.color : 'inherit')};
`;

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  if (type === 'file') paddingLeft += 20;
  return paddingLeft;
};

const getFileType = name => {
  return name
    .split('.')
    .pop()
    .toLowerCase();
};

const iconSelector = (node, onClick) => {
  switch (true) {
    case node.type === 'dir' && node.isOpen:
      return <FolderOpen size="16" color="orange" />;

    case node.type === 'dir' && !node.isOpen:
      return <Folder size="16" color="orange" />;

    case node.type === 'file' && getFileType(node.name) === 'json':
      return <CodeCurly size="16" color="yellow" />;

    case node.type === 'file' && getFileType(node.name) === 'js':
      return <CodeAlt size="16" color="yellow" />;

    case node.type === 'file' && getFileType(node.name) === 'jsx':
      return <CodeAlt size="16" color="cornflowerblue" />;

    case node.type === 'file' && getFileType(node.name) === 'md':
      return <InfoCircle size="16" color="cornflowerblue" />;

    case node.type === 'file' && getFileType(node.name) === 'pdf':
      return <FilePdf size="16" color="orange" />;

    case node.type === 'file' &&
      (getFileType(node.name) === 'css' ||
        getFileType(node.name) === 'scss' ||
        getFileType(node.name) === 'less'):
      return <Hashtag size="16" color="cornflowerblue" />;

    case node.type === 'file' &&
      (getFileType(node.name) === 'png' ||
        getFileType(node.name) === 'gif' ||
        getFileType(node.name) === 'jpg' ||
        getFileType(node.name) === 'jpeg'):
      return <Image size="16" color="cyan" />;

    default:
      return <File size="16" color="gray" />;
  }
};

const MenuNode = ({ node, getChildNodes, level, onToggle }) => {
  return (
    <React.Fragment>
      <StyledTreeNode
        level={level}
        type={node.type}
        onClick={() => (node.type === 'dir' ? onToggle(node) : null)}
      >
        <NodeIcon>
          {node.type === 'dir' &&
            (node.isOpen ? (
              <CaretDown size="16" color="white" />
            ) : (
              <CaretRight size="16" color="white" />
            ))}
        </NodeIcon>
        <NodeIcon marginRight={10}>{iconSelector(node)}</NodeIcon>
        <span role="button">{node.name}</span>
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
