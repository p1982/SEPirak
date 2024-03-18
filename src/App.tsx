import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/";
import { useTypedDispatch } from "./store/Store";
import { getStocks} from "./store/action/stocks/stockAction";

const App: React.FC = () => {
  const dispatch = useTypedDispatch();
  
  useEffect(() => {
    const init = async () => {
      dispatch(getStocks());
    };
    init();
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<h1>Not Found</h1>} />
    </Routes>
  );
};
export default App;
