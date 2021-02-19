import React, { useEffect, useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import TextInput from "~/components/TextInput";
import {
  Container,
  Logo,
  ContainerForm,
  Form,
  HeaderContainer,
  WelcomeText,
  DescriptionText,
  TouchableFormButton,
  FormButton,
  FormButtonText,
  TouchableRecoveryPassword,
  RecoveryPassword,
} from "./styles";
import { ApplicationState } from "~/redux";
import { GRADIENT_COLOR } from "~/consts/colors";
import { MS_SEMIBOLD } from "~/consts/font-family";
import { AUTH_SUCCESS, AUTH_FAILURE } from "~/consts/messages";
import { handle_submit_form } from "~/helpers/validation_auth_form";
import WrapperKeyboardAvoidingView from "~/components/WrapperKeyboardAvoidingView";

const LoginTablet: React.FC = () => {
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
      <Container>
        <Logo />
        <ContainerForm>
          <Form>
            <HeaderContainer>
              <WelcomeText>Olá, seja</WelcomeText>
              <WelcomeText>bem-vindo!</WelcomeText>
              <DescriptionText marginTop={2.5}>
                Para acessar a plataforma,
              </DescriptionText>
              <DescriptionText>faça seu login.</DescriptionText>
            </HeaderContainer>
            <TextInput
              label="E-MAIL"
              placeholder="user.name@mail.com"
              value={form.email}
              onChangeText={(text) =>
                setForm((obj) => ({ ...obj, email: text }))
              }
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
              <RecoveryPassword marginTop={0.3}>
                Clique{" "}
                <RecoveryPassword
                  underline
                  color={GRADIENT_COLOR}
                  fontFamily={MS_SEMIBOLD}
                >
                  aqui
                </RecoveryPassword>
              </RecoveryPassword>
            </TouchableRecoveryPassword>
          </Form>
        </ContainerForm>
      </Container>
    </WrapperKeyboardAvoidingView>
  );
};

export default LoginTablet;
