import styled from "styled-components";

const ModalBackgroung = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 5rem;
  position: fixed;
  overflow-y: scroll;
  color: white;
  cursor: pointer;

  p {
    font-size: 18px;
  }

  span {
    font-size: 15px;
    color: aqua;
  }

  img {
    border-radius: 0.5rem;
  }
`;

const ModalContainer = styled.div``;
const CloseModalButton = styled.button`
  cursor: pointer;
  margin-right: 0.5rem;
`;

export { ModalBackgroung, ModalContainer, CloseModalButton };
