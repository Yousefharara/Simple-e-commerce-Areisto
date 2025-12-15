import axios from "axios";
import { useReducer } from "react";
import { API_ACTION, API_PATH } from "../constant/api";
import { API_URL } from "../config/api";

const initialValue = {
  data: [],
  products: [],
  categories: [],
  isLoading: false,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case API_ACTION.DATA:
      return {
        ...state,
        data: action.payload,
      };
    case API_ACTION.CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case API_ACTION.PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case API_ACTION.IS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case API_ACTION.ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

const UseApi = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const getAllProducts = async () => {
    dispatch({ type: API_ACTION.IS_LOADING, payload: true });
    try {
      const { data } = await axios.get(API_URL + API_PATH.GET_ALL_PRODCUTS);
      dispatch({ type: API_ACTION.DATA, payload: data?.products });
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err.message });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  const getProducts = async () => {
    dispatch({ type: API_ACTION.IS_LOADING, payload: true });
    try {
      const { data } = await axios.get(API_URL + API_PATH.GET_PRODCUTS);
      dispatch({ type: API_ACTION.PRODUCTS, payload: data?.products });
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err.message });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  const getCategories = async () => {
    dispatch({ type: API_ACTION.IS_LOADING, payload: true });
    try {
      const { data } = await axios.get(API_URL + API_PATH.GET_GATEGORIES);
      dispatch({ type: API_ACTION.CATEGORIES, payload: data });
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err.message });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  const getProductsByCategory = async (category) => {
    dispatch({ type: API_ACTION.IS_LOADING, payload: true });
    try {
      const { data } = await axios.get(
        API_URL + API_PATH.GET_PRODUCTS_BY_CATEGORY.replace(":name", category)
      );
      dispatch({ type: API_ACTION.PRODUCTS, payload: data?.products });
    } catch (err) {
      dispatch({ type: API_ACTION.ERROR, payload: err.message });
    } finally {
      dispatch({ type: API_ACTION.IS_LOADING, payload: false });
    }
  };

  return {
    ...state,
    getAllProducts,
    getProductsByCategory,
    getCategories,
    getProducts,
  };
};

export default UseApi;
