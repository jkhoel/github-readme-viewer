import React from 'react';
// import styled from 'styled-components';

// const ModalContainer = styled.div`
//   visibility: ${props => (props.show ? 'visible' : 'hidden')};
//   background: #000000c2;
//   background: #444444;
//   border: 1px solid #222;
//   padding: 0.5em;
//   box-shadow: -2rem 2rem 2rem rgba(black, 0.2);
//   z-index: 1000;

//   position: relative;
//   height: 100%;
//   width: 100%;
// `;

// const ModalImage = styled.img`
//   max-width: 100vw;
//   display: block;
//   margin-left: auto;
//   margin-right: auto;
// `;

export const ImageModalContext = React.createContext({
  show: false,
  source: null,
  toggleModal: () => null,
  setSource: () => null
});

export const ImageModalContextConsumer = ImageModalContext.Consumer;

const testImage =
  'https://raw.githubusercontent.com/132nd-vWing/OPUF-Brief/master/Images/Bandarejask_airfield.PNG';

export const ImageModalContextProvider = ({ children }) => {
  const [show, toggleModal] = React.useState(false);
  const [source, setSource] = React.useState(testImage);

  return (
    <ImageModalContext.Provider
      value={{ show, toggleModal, source, setSource }}
    >
      {children}
    </ImageModalContext.Provider>
  );
};
