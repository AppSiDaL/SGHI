import * as React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";

export default function Main() {
  return <App />;
}

AppRegistry.registerComponent("mobile", () => Main);
