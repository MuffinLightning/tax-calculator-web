import styled from "styled-components";

const Input = styled.input`
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border-radius: 4px;
  border-color: transparent;
  border: 2px solid transparent;
  font-size: 1rem;
  height: 2em;
  padding-bottom: calc(0.5em - 2px);
  padding-left: calc(0.75em - 2px);
  padding-right: calc(0.75em - 2px);
  padding-top: calc(0.5em - 2px);

  &::placeholder {
    color: white;
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.6);
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
`;

const Header = styled.h1`
  color: ${(props) => props.theme.primary};
  font-size: 2.2rem;
`;

export { Form, Container, Input, Header };
