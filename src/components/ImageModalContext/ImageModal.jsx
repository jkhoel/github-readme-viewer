import React from 'react';
import styled from 'styled-components';

import { ImageModalContext } from './index';

const ModalContainer = styled.div`
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  // background: #444444;
  // background: #000000c2;
  // border: 1px solid #222;
  padding: 0.5em;
  // box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
  z-index: 1000;

  // height: 100vh;

  position: relative;
`;

// const ModalContainer = styled.div`
//   visibility: ${props => (props.show ? 'visible' : 'hidden')};
//   height: 50%;
//   width: 50%;

//   position: absolute;
//   // top: 2em;
//   // right: 2em;
//   margin-left: auto;
//   margin-right: auto;
//   z-index: 100;
// `;

const ModalImage = styled.img`
  max-width: 100vw;
  border: 1em solid #222;
  border-radius: 1em;
  box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
`;

const ImageModal = () => {
  const { show, source } = React.useContext(ImageModalContext);

  return (
    <ModalContainer show={show}>
      <ModalImage src={source} />
    </ModalContainer>
  );
};

export default ImageModal;
