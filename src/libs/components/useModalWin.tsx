import { PropsWithChildren, useState } from 'react';
import styled from 'styled-components';

export default function () {
  const [isShowed, setIsShowed] = useState(false);

  function toOpen() {
    setIsShowed(true);
  }

  function toClose() {
    setIsShowed(false);
  }

  function toToggle() {
    setIsShowed(!isShowed);
  }

  return {
    isShowed,
    toClose,
    toToggle,
    toOpen,
    ModalWin: ({children}: PropsWithChildren) => {
      return isShowed && (
        <ModalWin>
          {children}
        </ModalWin>
      )
    }
  }
};

const ModalWin = styled.div`
  display: grid;
  place-content: center;
  position:  fixed;
  left: 0; top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.6);
`;