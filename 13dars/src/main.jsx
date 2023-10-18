import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript
        initialColorMode={{
          initialColorMode: "dark",
          useSystemColorMode: true,
        }}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
