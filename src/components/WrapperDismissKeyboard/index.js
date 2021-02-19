import React from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

const WrapperDismissKeyboard = ({ children }) => {
  const [keyboardIsOpen, setKeyboardIsOpen] = React.useState(false);

  React.useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const _keyboardDidShow = () => {
    setKeyboardIsOpen(true);
  };

  const _keyboardDidHide = () => {
    setKeyboardIsOpen(false);
  };

  return (
    <TouchableWithoutFeedback
      disabled={!keyboardIsOpen}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};

export default WrapperDismissKeyboard;
