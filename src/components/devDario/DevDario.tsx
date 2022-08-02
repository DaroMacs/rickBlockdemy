import React from "react";
import styled from "styled-components";

const DevBy = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  background: #1fcf60;
  padding-top: 0.5rem;
  background: radial-gradient(
    circle farthest-corner at center center,
    #1fcf60 0%,
    #328bcf 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DevDario = () => {
  return (
    <DevBy>
      <a
        href="https://www.linkedin.com/in/dar%C3%ADo-macedo-44818a55/"
        target={"_blank"}
      >
        Dev. by Dario
      </a>
    </DevBy>
  );
};

export default DevDario;
