import React, { useContext } from "react";
import { APIContext } from "../contexts/contextAPI";

const ModalCard = () => {
  const { characModal } = useContext(APIContext);

  return (
    <>
      <img src={characModal.image}></img>
      <p>
        Name: <span>{characModal.name}</span>
      </p>
      <p>
        Id: <span>{characModal.id}</span>
      </p>
      <p>
        Status: <span>{characModal.status}</span>
      </p>
      <p>
        Species: <span>{characModal.species}</span>
      </p>
      <p>
        Type: <span>{characModal.type}</span>
      </p>
      <p>
        Gender: <span>{characModal.gender}</span>
      </p>
      <p>
        Origin: <span>{characModal.origin.name}</span>
      </p>
      <p>
        Location: <span>{characModal.location.name}</span>
      </p>
      <p>
        Created at: <span>{characModal.created.slice(0, 10)}</span>
      </p>
    </>
  );
};

export default ModalCard;
