import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "~/redux";
import Login from "~/pages/Login";
import useLoadResources from "~/hooks/useLoadResources";

export default function App() {
  const [isLoadingComplete, deviceType] = useLoadResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <Login deviceType={deviceType} />
      </Provider>
    );
  }
}
