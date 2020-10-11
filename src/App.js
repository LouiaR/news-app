import React from "react";
import { ThemeProvider } from "react-jss";

import Layout from "./components/Layout";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
}

export default App;
