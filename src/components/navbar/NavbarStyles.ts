import styled from "styled-components";

const Nav = styled.section`
  width: 100vw;
  padding: 0.5rem 2rem;
  display: flex;
  background-color: rgba(38, 63, 164, 0.655);
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const Button = styled.button<{
  isLocked?: boolean;
}>`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 0.8rem;
  background: #4fa0b9;
  border: none;
  color: white;
  width: ${({ isLocked }) => (isLocked ? "auto" : "50%")};
  padding: 0.5rem 0.8rem;
  border-radius: 0.5rem;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
    background-color: #2d6b7d;
  }

  @media screen and (min-width: 576px) {
    padding: 0.8rem 1rem;
    width: auto;
  }
`;

export { Nav, Button };
