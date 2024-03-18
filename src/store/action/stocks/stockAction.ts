import {
  STOCKS_LOADING,
  STOCKS_FAIL,
  STOCKS_SUCCESS,
} from "./stocksActionTypes";
import axios from "axios";
import { TypedThunkAction } from "../../Store";

export const getStocks =
  ():TypedThunkAction => async (dispatch) => {
    try {
      dispatch({
        type: STOCKS_LOADING,
      });
      const res = await axios.get('./data.json');  
      dispatch({
        type: STOCKS_SUCCESS,
        payload: res.data,
      });
    } catch (e) {
      dispatch({
        type: STOCKS_FAIL,
        payload: {'e':'error'},
      });
    }
  };

