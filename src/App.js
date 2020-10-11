import React from "react";
import { ThemeProvider } from "react-jss";

import Layout from "./components/Layout";
import Articles from "./components/Articles";
import theme from "./theme";
import useFetchNews from "./components/lib/useFetchNews";
import { newsContext } from "./components/lib/newsContext";

const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const { dispatch, state } = useFetchNews(url);

  return (
    <newsContext.Provider value={{ dispatch, state }}>
      <ThemeProvider theme={theme}>
        <Layout>
          <div>Bookmark</div>
          <Articles />
        </Layout>
      </ThemeProvider>
    </newsContext.Provider>
  );
}

export default App;
