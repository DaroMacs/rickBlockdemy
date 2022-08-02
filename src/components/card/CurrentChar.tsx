import {
  CardStyled,
  CardContainer,
  Image,
  Title,
  CardInfo,
  AllInfo,
} from "./CardStyles";
import ClipLoader from "react-spinners/ClipLoader";
import { useContext } from "react";
import { APIContext } from "../contexts/contextAPI";
import { Button } from "../navbar/NavbarStyles";

const titleNames = [
  { name: "Status" },
  { id: "Id" },
  { status: "Status" },
  { type: "Type" },
  { gender: "Gender" },
  { origin: "Origin" },
  { Location: "Location" },
  { Created: "Created at" },
];

const CurrentChar = () => {
  const { characters, loading, getCharacter } = useContext(APIContext);

  return (
    <CardContainer>
      <CardStyled>
        <Image
          alt="ImageCharacter"
          src={characters[characters.length - 1]?.image}
        />
        <CardInfo>
          <Title>
            <h4>{characters[characters.length - 1]?.name}</h4>
            <p>Id: {characters[characters.length - 1]?.id}</p>
          </Title>
          <AllInfo>
            <p>Status:</p>
            <p>{characters[characters.length - 1]?.status}</p>
          </AllInfo>
          <AllInfo>
            <p>Species:</p>
            <p>{characters[characters.length - 1]?.species}</p>
          </AllInfo>
          <AllInfo>
            <p>Type:</p>
            <p>{characters[characters.length - 1]?.type}</p>
          </AllInfo>
          <AllInfo>
            <p>Gender:</p>
            <p>{characters[characters.length - 1]?.gender}</p>
          </AllInfo>
          <AllInfo>
            <p>Origin:</p>
            <p>{characters[characters.length - 1]?.origin.name}</p>
          </AllInfo>
          <AllInfo>
            <p>Location:</p>
            <p>{characters[characters.length - 1]?.location.name}</p>
          </AllInfo>
          <AllInfo>
            <p>Created at:</p>
            <p>{characters[characters.length - 1]?.created.slice(0, 10)}</p>
          </AllInfo>
        </CardInfo>
      </CardStyled>
      <Button onClick={getCharacter}>
        {loading ? (
          <ClipLoader color={"white"} loading={loading} size={15} />
        ) : (
          "Create"
        )}
      </Button>
    </CardContainer>
  );
};

export default CurrentChar;
