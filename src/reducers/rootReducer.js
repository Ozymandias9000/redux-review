import { ADD_ARTICLE } from "../constants/actionConstants";

const rootReducer = (state = { articles: [] }, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
