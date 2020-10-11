import React from "react";
import { ThemeProvider } from "react-jss";

import Layout from "./components/Layout";
import theme from "./theme";
import useFetchNews from "./components/lib/useFetchNews";

const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const { state } = useFetchNews(url);
  console.log(state);

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>Bookmark</div>
        <div>Article</div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
