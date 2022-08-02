import { useQuery } from "@apollo/client";
import { createContext, useEffect, useState } from "react";
import GET_CHARACTER from "../querys/QueryCharacters";
import { rdn } from "../utils/randomFn";

interface APIContextProps {
  children: React.ReactNode;
}

export interface Charac {
  image: string;
  name: string;
  id: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
  };
  location: { name: string };
  created: string;
}

interface Props {
  getCharacter: () => void;
  loading: boolean;
  data: Charac[];
  characterId: number;
  setCharacterId: React.Dispatch<React.SetStateAction<number>>;
  characters: Charac[];
  setCharacters: React.Dispatch<React.SetStateAction<Charac[]>>;
  openModal: boolean;
  setopenModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleView: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  characModal: Charac;
}

export const APIContext = createContext<Props>({} as Props);

export const APIContextProvider = ({ children }: APIContextProps) => {
  const [characterId, setCharacterId] = useState<number>(0);
  const [characters, setCharacters] = useState<Charac[]>([]);
  const [characModal, setCharacModal] = useState<Charac>({} as Charac);
  const [openModal, setopenModal] = useState<boolean>(false);

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: {
      id: characterId,
    },
  });

  const getCharacter = () => {
    setCharacterId(rdn());
  };

  useEffect(() => {
    if (characterId === 0) return;

    if (data) {
      setCharacters([...characters, data.character]);
    }
  }, [data]);

  // useEffect(() => {

  // }, [third])

  const handleView = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const viewId = e.currentTarget.id;
    const characterFiltered = characters.filter((char) => char.id === viewId);
    setCharacModal(characterFiltered[0]);

    setopenModal(true);
  };

  return (
    <APIContext.Provider
      value={{
        getCharacter,
        loading,
        data,
        characterId,
        setCharacterId,
        characters,
        setCharacters,
        openModal,
        setopenModal,
        handleView,
        characModal,
      }}
    >
      {children}
    </APIContext.Provider>
  );
};
