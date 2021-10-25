import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.primary};
  border-width: 5px;
  border-radius: 10px;
  border-color: transparent;
  padding: 10px 50px;
  font-size: 1em;
  font-weight: 700;
  transition: all 0.7s ease 0s;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export { Button };
