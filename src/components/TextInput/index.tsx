import React from "react";
import { TextInputProps } from "react-native";
import {
  Container,
  Label,
  InputContainer,
  Input,
  MessageError,
  ErrorIcon,
} from "./styles";

export interface Props extends TextInputProps {
  label: string;
  messageError?: string;
}

const TextInput: React.FC<Props> = ({
  label = "E-MAIL",
  messageError,
  ...props
}) => {
  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer messageError={messageError}>
        <Input {...props} />
        {!!messageError && <ErrorIcon />}
      </InputContainer>
      {!!messageError && <MessageError>{messageError}</MessageError>}
    </Container>
  );
};

export default TextInput;
