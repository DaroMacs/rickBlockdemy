import Card from "./components/card/Card";
import GlobalStyles from "./components/styles/Global";
import { Web3Context } from "./components/contexts/contextWeb3";
import { useContext, useState } from "react";
import LockedApp from "./components/lockedApp/LockedApp";
import Navbar from "./components/navbar/Navbar";
import ListChars from "./components/listChars.tsx/ListChars";
import { MainDiv } from "./components/styles/Main";
import Modal from "./components/modal/Modal";
import { APIContext } from "./components/contexts/contextAPI";

function App() {
  const { openModal } = useContext(APIContext);
  const { active } = useContext(Web3Context);

  return (
    <>
      <GlobalStyles />

      {active ? (
        <MainDiv>
          <Navbar />
          <Card />
          <ListChars />
          {openModal && <Modal />}
        </MainDiv>
      ) : (
        <LockedApp />
      )}
    </>
  );
}

export default App;
