import * as React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import "react-native-gesture-handler";

import SplashScreen from "./pages/SplashScreen";
import Portal from "./pages/Portal";
import Portal2 from "./pages/Portal2";
import Painel from "./pages/Painel";
import Painel2 from "./pages/Painel2";
import NetworkError from "./pages/NetworkError";

const Routes = createAppContainer(
  createSwitchNavigator({
    SplashScreen,
    Portal,
    Painel,
    Portal2,
    Painel2,
    NetworkError,
  })
);

export default Routes;
