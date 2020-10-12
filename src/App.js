import React, { useEffect } from "react";
import { ThemeProvider } from "react-jss";

import Layout from "./components/Layout";
import Articles from "./components/Articles";
import Bookmark from "./components/Bookmark";
import theme from "./theme";
import useFetchNews from "./components/lib/useFetchNews";
import { newsContext } from "./components/lib/newsContext";

const url = `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_API_KEY}`;

function App() {
  const { state, dispatch } = useFetchNews(url);

  useEffect(() => {
    // Run if local storage 'bookmark' is set
    if (localStorage.getItem("bookmark")) {
      let items = JSON.parse(localStorage.getItem("bookmark"));
      items = { ...items, ...state.bookmark };
      const arr = Object.keys(items);
      arr.map((key) => {
        if (!items[key].isMarked) {
          delete items[key];
        }
        return key;
      });
      return localStorage.setItem("bookmark", JSON.stringify(items));
    }

    // Set local storage 'bookmark'
    if (!localStorage.getItem("bookmark")) {
      localStorage.setItem("bookmark", JSON.stringify({}));
    }
  }, [dispatch, state.bookmark]);

  return state.isLoading ? (
    <div className="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  ) : (
    <newsContext.Provider value={{ dispatch, state }}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Bookmark />
          <Articles />
        </Layout>
      </ThemeProvider>
    </newsContext.Provider>
  );
}

export default App;
