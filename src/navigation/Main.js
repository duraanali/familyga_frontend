import React, { memo } from "react";
import { View } from "react-native";
import useCachedResources from "@hooks/useCachedResources";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../store";
import Stacks from "./Stacks";

const Main = memo(() => {
  const fontsLoaded = useCachedResources();

  if (!fontsLoaded) {
    return <View />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Stacks />
      </PersistGate>
    </Provider>
  );
});

export default Main;
