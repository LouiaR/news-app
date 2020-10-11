import { useEffect } from "react";
import useNewsReducer from "./useNewsReducer";

const useFetchNews = (url) => {
  const [state, dispatch] = useNewsReducer();

  useEffect(() => {
    let mounted = true; // Prevent memory leak if component is unmounted before fetching is completed

    const getData = async (url) => {
      dispatch({ type: "LOADING" });
      try {
        const res = await fetch(url);
        const json = await res.json();
        if (mounted) {
          // Run if api key is invalid for example
          if (json.status === "error") {
            return dispatch({ type: "FETCH_ERROR", payload: json.message });
          }
          console.log("err", json.message);
          const { articles } = json;
          dispatch({ type: "FETCH_SUCCESS", payload: articles });
        }
      } catch (err) {
        dispatch({ type: "FETCH_ERROR", payload: err.message });
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
