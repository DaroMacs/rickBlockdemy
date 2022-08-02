import styled from "styled-components";
import logo from "../../assets/images/lockedlogo.png";
import { motion } from "framer-motion";
import { logoAnimation } from "../variants/variants";
import { Web3Context } from "../contexts/contextWeb3";
import { useContext } from "react";
import ContainerLockedApp from "./ContainerLockedApp";
import { Button } from "../navbar/NavbarStyles";

const Message = styled.p`
  color: white;
`;

const LockedApp = () => {
  const { connect, isUnsupportedChain } = useContext(Web3Context);

  return (
    <ContainerLockedApp>
      <motion.img
        variants={logoAnimation}
        animate={logoAnimation.animate}
        src={logo}
        alt="logoRick"
        id="logo"
      ></motion.img>
      <Button isLocked onClick={connect}>
        Connect Wallet
      </Button>
      {isUnsupportedChain && (
        <Message>Please select Mainnet network in Metamask</Message>
      )}
    </ContainerLockedApp>
  );
};

export default LockedApp;
