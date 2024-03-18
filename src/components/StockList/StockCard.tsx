import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import LineChart from "../LineChart/LineChart";
import { useTypedSelector } from "../../store/Store";

interface IStockCard {
  id: string;
}

Chart.register(CategoryScale);

const StockCard: React.FC<IStockCard> = ({ id }) => {
  let stock = useTypedSelector((state: any) => state.stocks.stocks[id]);
  const [formData, setFormData] = useState<any[]>([]);
  const [date, setDate] = useState(dayjs(new Date()));
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [
      {
        label: stock.name,
        data: [] as number[],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    const formattedData = [stock].flatMap((item) =>
      item.times.map((time:number, index:number) => ({
        id: item.id,
        time,
        price: item.prices[index],
      }))
    );

    setDate(stock?.times[0]);
    setFormData(formattedData);
  }, [stock]);

  useEffect(() => {
    setChartData({
      labels: formData.map((data) => dayjs(data.time).format("MMM, DD, HH:mm")),
      datasets: [
        {
          label: stock.name,
          data: formData.map((data) => data.price),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }, [formData, stock]);

  // Проверяем, что есть данные для отображения, прежде чем передавать chartData в LineChart
  if (chartData.labels.length === 0 || chartData.datasets[0].data.length === 0) {
    return null; // Или любая другая логика загрузки, например, индикатор загрузки
  }

  return (
    <li className="p-4 border-2 border-solid border-neutral-400 rounded-md">
      <LineChart chartData={chartData} name={stock.name} date={date} />
    </li>
  );
};

export default StockCard;
