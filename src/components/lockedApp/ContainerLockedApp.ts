import styled from "styled-components";

const ContainerLockedApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;

  h1 {
    color: white;
  }

  #logo {
    height: 200px;
    padding-bottom: 3rem;
  }

  @media screen and (min-width: 425px) {
    #logo {
      height: 350px;
    }
  }
`;

const Web3Title = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  margin-top: -1rem;

  img {
    max-height: 80px;
  }

  @media screen and (min-width: 425px) {
    img {
      max-height: 120px;
    }
  }
`;

export { ContainerLockedApp, Web3Title };
