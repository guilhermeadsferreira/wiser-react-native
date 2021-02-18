import React from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "~/redux";
import Main from "~/pages/Main";
import useCachedResources from "~/hooks/useCachedResources";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <StatusBar translucent backgroundColor="transparent" />
        <Main />
      </Provider>
    );
  }
}
