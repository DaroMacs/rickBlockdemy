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

export default ContainerLockedApp;
