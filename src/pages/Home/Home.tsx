import React from "react";
import StockList from "../../components/StockList";


const Home: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-4 my-10  lg:mx-auto">
      <StockList/>
    </div>
  );
};

export default Home;
