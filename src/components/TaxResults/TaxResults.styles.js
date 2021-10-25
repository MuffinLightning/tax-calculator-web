import styled from "styled-components";

const ResultsContainer = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.2);
  width: 400px;
  border-radius: 5px;
`;

const ResultsText = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Header = styled.h1`
  color: #03dac6;
`;

export { ResultsText, ResultsContainer, Header };
