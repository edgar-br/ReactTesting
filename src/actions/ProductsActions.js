import axios from "axios";
import { GET_PRODUCTS, INIT_REQUEST, ERROR_PRODUCTS } from "./Types";

export const getProducts = () => {
  return dispatch => {
    dispatch({
      type: INIT_REQUEST
    });
    axios
      .get("http://localhost:3500/api/products")
      .then(response => {
        dispatch({
          type: GET_PRODUCTS,
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: ERROR_PRODUCTS,
          payload: "Cant show products, try again"
        });
      });
  };
};
