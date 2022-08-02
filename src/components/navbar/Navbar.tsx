import React from "react";
import { useContext } from "react";
import logo from "../../assets/images/logo.png";
import { Web3Context } from "../contexts/contextWeb3";
import { shortenWalletAddress } from "../utils/shortenWalletAddress";
import { Button, Nav } from "./NavbarStyles";

const Navbar = () => {
  const { active, account, disconnect } = useContext(Web3Context);

  return (
    <Nav>
      <img id="logo" alt="ricklogo" src={logo}></img>
      <Button onClick={disconnect}>{shortenWalletAddress(account)}</Button>
    </Nav>
  );
};

export default Navbar;
