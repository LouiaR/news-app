import { useReducer } from "react";

const initialState = {
  error: "",
  articles: [],
  isLoading: false,
  bookmark: {},
};

const formatData = (state, payload) =>
  state.articles.map((article) => {
    const arr = Object.keys(payload);
    arr.map((key) => {
      if (article.url === key) {
        article.isMarked = payload[key].isMarked;
      }
      return article;
    });
    return article;
  });

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        articles: action.payload,
      };
    case "GET_CACHE_ITEMS":
      return {
        ...state,
        bookmark: action.payload,
      };
    case "BOOKMARK":
      const data = formatData(state, action.payload);
      return {
        ...state,
        articles: data,
        bookmark: { ...state.bookmark, ...action.payload },
      };
    case "UNBOOKMARK":
      const db = formatData(state, action.payload);
      return {
        ...state,
        articles: db,
        bookmark: { ...state.bookmark, ...action.payload },
      };
    case "FINISH_LOADING":
      return {
        ...state,
        isLoading: false,
      };
    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

const useNewsReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return [state, dispatch];
};

export default useNewsReducer;
