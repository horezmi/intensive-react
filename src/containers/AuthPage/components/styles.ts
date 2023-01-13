import styled from "styled-components";
import { TextField as TextFieldComponent } from "@mui/material";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 100px;
  margin: 0 auto;
`;

export const TextField = styled(TextFieldComponent)`
  width: 500px;
  height: 60px;
`;

export const TextFieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  align-items: center;
`;
