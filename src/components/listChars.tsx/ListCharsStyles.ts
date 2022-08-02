import styled from "styled-components";

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  width: 90%;

  h2 {
    text-align: center;
  }

  p {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    p {
      font-size: 21px;
    }

    width: 80%;
  }
`;

const ContainerCharac = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-image: linear-gradient(
    to right bottom,
    #051937,
    #004d7a,
    #008793,
    #00bf72,
    #a8eb12
  );
  padding: 0.5rem;
  border-radius: 0.5rem;
`;

const ContainerImgName = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  gap: 0.5rem;
`;

const Image = styled.img`
  background-repeat: no-repeat;
  background-size: cover;
  width: 80px;
  border-radius: 0.5rem;
`;

const ViewButton = styled.button`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 0.8rem;
  background: #4fa0b9;
  color: white;
  border: 0.5px solid white;

  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #2d6b7d;
  }
`;

export { ContainerList, ContainerCharac, Image, ContainerImgName, ViewButton };
