import { Line } from "react-chartjs-2";
import dayjs from "dayjs";
import { ChartData } from "chart.js";
interface ILineChart {
    chartData: ChartData<'line', unknown>;
    name: string;
    date: any
  }

  const LineChart: React.FC<ILineChart> = ({ chartData, name, date }) =>{
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>{name}</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `Prices of Stock company ${name} on ${dayjs(date).format('YYYY, MMMM DD')}`
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;