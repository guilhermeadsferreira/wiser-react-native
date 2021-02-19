import React from "react";
import {
  Container,
  Label,
  InputContainer,
  Input,
  MessageError,
  ErrorIcon,
} from "./styles";
import { TextInputType } from "~/consts/interfaces";

const TextInput: React.FC<TextInputType> = ({
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
