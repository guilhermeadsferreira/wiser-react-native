import { TextProps, ViewProps, TextInputProps } from "react-native";

export interface TextType extends TextProps {
  marginTop?: number;
  underline?: boolean;
  color?: string;
  fontFamily?: string;
}

export interface ViewType extends ViewProps {
  messageError?: string;
}

export interface TextInputType extends TextInputProps {
  label: string;
  messageError?: string;
}
