import { useContext } from "react";
import { ContainerGen } from "../styles/Main";
import CurrentChar from "./CurrentChar";
import { APIContext } from "../contexts/contextAPI";
import { Button } from "../navbar/NavbarStyles";

const Card = () => {
  const { characterId, getCharacter } = useContext(APIContext);

  return (
    <>
      {characterId == 0 ? (
        <ContainerGen>
          <p>There is no History</p>
          <Button onClick={getCharacter}>Create</Button>
        </ContainerGen>
      ) : (
        <>
          <CurrentChar />
        </>
      )}
    </>
  );
};

export default Card;
