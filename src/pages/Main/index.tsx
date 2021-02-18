import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import {
  ImageBackground,
  Form,
  WelcomeText,
  DescriptionText,
  FormButton,
  FormButtonText,
  TouchableFormButton,
  TouchableRecoveryPassword,
  RecoveryPassword,
} from "./styles";
import TextInput from "~/components/TextInput";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "~/redux";
import { loadRequest } from "~/redux/auth/actions";

const Main = () => {
  const dispatch = useDispatch();
  const { error, loading, isLogged } = useSelector(
    (state: ApplicationState) => state.auth
  );
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (error) {
      Alert.alert("Erro!");
    } else if (isLogged) {
      Alert.alert("Login realizado com sucesso.");
    }
  }, [error, isLogged, loading]);

  return (
    <ImageBackground>
      <Form>
        <WelcomeText>Olá, seja</WelcomeText>
        <WelcomeText>bem-vindo!</WelcomeText>
        <DescriptionText>
          Para acessar a plataforma, faça seu login.
        </DescriptionText>
        <TextInput
          label="E-MAIL"
          placeholder="user.name@mail.com"
          value={form.email}
          onChangeText={(text) => setForm((obj) => ({ ...obj, email: text }))}
          autoCapitalize="none"
          keyboardType="email-address"
          messageError={formErrors.email}
        />
        <TextInput
          label="SENHA"
          placeholder="*******"
          secureTextEntry={true}
          value={form.password}
          onChangeText={(text) =>
            setForm((obj) => ({ ...obj, password: text }))
          }
          autoCapitalize="none"
          messageError={formErrors.password}
        />
      </Form>
      <TouchableFormButton
        onPress={() =>
          dispatch(loadRequest({ email: form.email, password: form.password }))
        }
      >
        <FormButton>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <FormButtonText>ENTRAR</FormButtonText>
          )}
        </FormButton>
      </TouchableFormButton>
      <RecoveryPassword marginTop={25}>
        Esqueceu seu login ou senha?
      </RecoveryPassword>
      <TouchableRecoveryPassword>
        <RecoveryPassword marginTop={5}>
          Clique <RecoveryPassword underline>aqui</RecoveryPassword>
        </RecoveryPassword>
      </TouchableRecoveryPassword>
    </ImageBackground>
  );
};

export default Main;
