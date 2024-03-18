import { StockType } from "../../store/action/stocks/stocksActionTypes";
import {  useTypedSelector } from "../../store/Store";
import StockCard from "./StockCard";



const StockList: React.FC = () => {
    
  const stocksList: StockType[] = useTypedSelector((state: any) => Object.values(state.stocks?.stocks ?? {}));
  
  return (
    <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {stocksList.map((stock) => (
          <StockCard key={stock.id} id={stock.id} />
        ))}
      </ul>
  )
}
export default StockList;
