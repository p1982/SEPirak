import {
  StockType,
  StocksDispatchTypes,
  STOCKS_LOADING,
  STOCKS_SUCCESS,
  STOCKS_FAIL
} from "../action/stocks/stocksActionTypes";

interface IInitialState {
  loading?: boolean;
  stocks?: { [key: string]: StockType };
  error: number | null;
}

interface IAcc {
  [key: string]: StockType;
}

//initial state
const initialState: IInitialState = {
  loading: true,
  stocks: {},
  error: null
};

//note reducer
const stocksReducer = (
  state: IInitialState = initialState,
  action: StocksDispatchTypes
) => {
  switch (action.type) {
    case STOCKS_SUCCESS:     
      const result = action.payload.reduce((acc: IAcc, cur: StockType) => {
        acc[cur.id] = cur;
        return acc;
      }, {});
      return { ...state, stocks: result, loading: false };
    case STOCKS_FAIL:
      return { ...state, error: action.payload}
    default:
      return state;
  }
};

export default stocksReducer;
