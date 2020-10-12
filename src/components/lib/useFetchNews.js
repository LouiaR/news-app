import { useEffect } from "react";
import useNewsReducer from "./useNewsReducer";

const useFetchNews = (url) => {
  const [state, dispatch] = useNewsReducer();

  useEffect(() => {
    let mounted = true; // Prevent memory leak if component is unmounted before fetching is completed

    // Check local storage data and store bookmarked article on state

    // When app load check local storage and dispatch 'GET_CACHE_ITEMS' action to store its content in state.book, dispatch 'BOOKMARK' to add or remove item from local cache and format data fetched from api by adding 'isMarked' propriety

    const getData = async (url) => {
      dispatch({ type: "LOADING" });
      try {
        const res = await fetch(url);
        const json = await res.json();
        const { articles } = json;
        if (mounted) {
          dispatch({ type: "FETCH_SUCCESS", payload: articles });
          // Run this if local storage 'bookmark' is set
          if (localStorage.getItem("bookmark")) {
            let items = JSON.parse(localStorage.getItem("bookmark"));
            items = { ...items };
            // Save cache items in state.bookmark
            dispatch({ type: "GET_CACHE_ITEMS", payload: items });
            // Run this to massage data and add 'isMarked'  field so that bookmark item will be highlighted
            dispatch({ type: "BOOKMARK", payload: items });
          }
        }
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err });
      } finally {
        if (mounted) {
          dispatch({ type: "FINISH_LOADING" });
        }
      }
    };

    getData(url);

    return () => (mounted = false); // Clean up
  }, [dispatch, url]);
  return { state, dispatch };
};

export default useFetchNews;
