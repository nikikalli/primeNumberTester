import styled from "styled-components";

export const StyledInputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: center;
  gap: 2rem;
  padding: 2rem;
  width: 100vh;
`;

export const StyledLineHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const StyledInput = styled.input`
  display: flex;
  border: 1px solid;
  border-radius: 0.3rem;
`;
export const StyledButton = styled.button`
  display: flex;
  border: 1px solid;
  border-radius: 1rem;
  border-color: lightblue;
  background-color: lightgray;
  &:hover {
    background-color: darkgray;
  }
  cursor: pointer;
`;

export const StyledFirstResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const StyledHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8rem;
`;
