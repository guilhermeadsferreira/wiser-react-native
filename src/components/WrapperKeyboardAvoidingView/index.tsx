import React from "react";
import { KeyboardAvoidingView, ScrollView } from "./styles";

const WrapperKeyboardAvoidingView: React.FC = ({ children }) => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>{children}</ScrollView>
    </KeyboardAvoidingView>
  );
};

export default WrapperKeyboardAvoidingView;
