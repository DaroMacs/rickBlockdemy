import React, { useContext } from "react";
import { APIContext } from "../contexts/contextAPI";
import ModalCard from "./ModalCard";
import {
  CloseModalButton,
  ModalBackgroung,
  ModalContainer,
} from "./ModalStyles";

const Modal = () => {
  const { setopenModal, characModal } = useContext(APIContext);

  return (
    <ModalBackgroung
      onClick={() => {
        setopenModal(false);
      }}
    >
      <CloseModalButton
        onClick={() => {
          setopenModal(false);
        }}
      >
        {" "}
        X{" "}
      </CloseModalButton>
      <ModalContainer>
        <ModalCard />
      </ModalContainer>
    </ModalBackgroung>
  );
};

export default Modal;
