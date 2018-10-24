import { ADD_ARTICLE } from "../constants/actionConstants";

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
