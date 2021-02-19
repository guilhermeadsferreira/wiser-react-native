import { Platform } from "react-native";
import styled from "styled-components/native";

export const KeyboardAvoidingView = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : undefined,
})`
  flex: 1;
`;

export const ScrollView = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, justifyContent: "center" },
  keyboardShouldPersistTaps: "handled",
  showsVerticalScrollIndicator: false,
})``;
