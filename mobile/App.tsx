import * as React from "react";
import { AppRegistry } from "react-native";
import App from "./src/App";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Main() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

AppRegistry.registerComponent("mobile", () => Main);
