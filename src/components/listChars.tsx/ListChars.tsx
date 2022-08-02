import { useContext } from "react";
import { motion } from "framer-motion";
import { APIContext, Charac } from "../contexts/contextAPI";
import {
  ContainerCharac,
  ContainerImgName,
  ContainerList,
  Image,
  ViewButton,
} from "./ListCharsStyles";

const ListChars = () => {
  const { handleView, characterId, characters } = useContext(APIContext);

  return (
    <>
      {characterId !== 0 && (
        <>
          <h2>History</h2>
          <ContainerList>
            {[...characters].reverse().map((char: Charac) => (
              <ContainerCharac
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                key={char.id}
              >
                <ContainerImgName>
                  <Image src={char.image} alt="Charac. img" />
                  <p>{char.name}</p>
                </ContainerImgName>
                <ViewButton
                  id={`${char.id}`}
                  onClick={(e) => {
                    handleView(e);
                  }}
                >
                  View
                </ViewButton>
              </ContainerCharac>
            ))}
          </ContainerList>
        </>
      )}
    </>
  );
};

export default ListChars;
