import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 0;
  width: 90%;
  height: 100%;

  button {
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
  }

  @media screen and (min-width: 1024px) {
    width: 80%;
  }
`;

const CardStyled = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  border: 1px solid white;
  border-radius: 0.5rem;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const CardInfo = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

const Image = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  @media screen and (min-width: 768px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 0.5rem;
    height: 420px;
  }
`;

const Title = styled.div`
  text-align: center;

  h4 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.6rem;
    margin-top: 0.3rem;
  }

  p::after {
    display: inline-block;
    content: "";
    border-top: 0.1rem solid #6e6c6c8f;
    width: 100%;
  }
`;

const AllInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #ffffffe8;
  border-bottom: 1px solid #ffffff63;
  margin-bottom: 1rem;

  h5,
  p {
    font-size: 1rem;
    margin: 0;
    padding-bottom: 0.3rem;
  }
`;

export { CardContainer, CardStyled, Image, Title, CardInfo, AllInfo };
