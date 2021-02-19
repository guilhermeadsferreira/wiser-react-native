import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useSelector, useDispatch } from "react-redux";
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
import { ApplicationState } from "~/redux";
import { AUTH_SUCCESS, AUTH_FAILURE } from "~/consts/messages";
import { handle_submit_form } from "~/helpers/validation_auth_form";
import WrapperKeyboardAvoidingView from "~/components/WrapperKeyboardAvoidingView";

const LoginMobile = () => {
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
      Alert.alert(AUTH_FAILURE);
    } else if (isLogged) {
      Alert.alert(AUTH_SUCCESS);
      setForm({
        email: "",
        password: "",
      });
    }
  }, [error, isLogged, loading]);

  return (
    <WrapperKeyboardAvoidingView>
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
          onPress={() => {
            handle_submit_form({ form, setFormErrors, dispatch });
          }}
        >
          <FormButton>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <FormButtonText>ENTRAR</FormButtonText>
            )}
          </FormButton>
        </TouchableFormButton>
        <RecoveryPassword marginTop={3.5}>
          Esqueceu seu login ou senha?
        </RecoveryPassword>
        <TouchableRecoveryPassword>
          <RecoveryPassword marginTop={0.5}>
            Clique <RecoveryPassword underline>aqui</RecoveryPassword>
          </RecoveryPassword>
        </TouchableRecoveryPassword>
      </ImageBackground>
    </WrapperKeyboardAvoidingView>
  );
};

export default LoginMobile;
