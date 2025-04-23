import { FC } from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

interface SubscriptionTypes {
  free: number;
  pro: number;
  premium: number;
}

interface Props {
  data: SubscriptionTypes;
}

const SubscriptionChart: FC<Props> = ({ data }) => {
  const chartData: ChartData<"doughnut", number[], string> = {
    labels: ["free", "pro", "premium"],
    datasets: [
      {
        data: [data.free, data.pro, data.premium],
        backgroundColor: ["#8bc34a", "#03a9f4", "#ff5722"],
        borderColor: ["#fff"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Subscription Distribution",
      },
    },
    cutout: "70%",
  };

  return (
    <div className="h-[400px] w-full bg-blue-500/10 shadow-md rounded-lg p-4 flex items-center justify-center">
      <Doughnut data={chartData} options={options} key={JSON.stringify(data)} />
    </div>
  );
};

export default SubscriptionChart;
