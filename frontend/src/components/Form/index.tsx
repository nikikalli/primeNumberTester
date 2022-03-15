import React from "react";
import styled from "styled-components";
import { FormProps } from "../../types";
import {
  StyledButton,
  StyledInput,
  StyledInputForm,
  StyledLineHolder,
} from "../styles/FormStyles";

const StyledLabel = styled.label`
  font-weight: bold;
`;

export const Form = ({ label, value, onChange, onSubmit }: FormProps) => {
  return (
    <StyledInputForm onSubmit={onSubmit}>
      <StyledLineHolder>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput value={value} type="text" onChange={onChange} required />
      </StyledLineHolder>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledInputForm>
  );
};
