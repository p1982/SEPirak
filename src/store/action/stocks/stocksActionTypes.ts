//types
export const STOCKS_LOADING = "STOCKS_LOADING";
export const STOCKS_FAIL = "STOCKS_FAIL";
export const STOCKS_SUCCESS = "STOCKS_SUCCESS";

//interfaces
export type StockType = {
  id: string;
  times: Array<number>;
  prices: Array<number>;
};


export interface StockLoading {
  type: typeof STOCKS_LOADING;
}

export interface StockFail {
  type: typeof STOCKS_FAIL;
  payload:  { [key: string]: string };
}

export interface StocksSuccess {
  type: typeof STOCKS_SUCCESS;
  payload: Array<StockType>;
}


//All types actions
export type StocksDispatchTypes =
  | StockLoading
  | StockFail
  | StocksSuccess

