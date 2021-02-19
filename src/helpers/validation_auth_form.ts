import { Keyboard } from "react-native";
import * as yup from "yup";
import { loadRequest } from "~/redux/auth/actions";

const form_schema = yup.object().shape({
  email: yup.string().email("EmailInvalid").required("EmailRequired"),
  password: yup.string().required("PasswordRequired"),
});

export const handle_submit_form = ({ form, setFormErrors, dispatch }) => {
  clean_messages_error(setFormErrors);
  form_schema
    .validate(
      {
        email: form.email,
        password: form.password,
      },
      {
        abortEarly: false,
      }
    )
    .then(() => {
      Keyboard.dismiss();
      dispatch(loadRequest({ ...form }));
    })
    .catch((err) => {
      err.errors.map((error) => set_message_error(error, setFormErrors));
    });
};

export const set_message_error = (error, setFormErrors) => {
  const obj = {
    EmailInvalid: () =>
      setFormErrors((obj) => ({ ...obj, email: "Digite um e-mail válido." })),
    EmailRequired: () =>
      setFormErrors((obj) => ({
        ...obj,
        email: "E-mail é um campo obrigatório.",
      })),
    PasswordRequired: () =>
      setFormErrors((obj) => ({
        ...obj,
        password: "Senha é um campo obrigatório.",
      })),
  };

  obj[error]();
};

export const clean_messages_error = (setFormErrors) => {
  setFormErrors({
    email: "",
    password: "",
  });
};
