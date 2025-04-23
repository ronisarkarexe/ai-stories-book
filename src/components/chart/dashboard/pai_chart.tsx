import { FC } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface UsersData {
  total: number;
  active: number;
  inactive: number;
  blocked: number;
  writers: number;
  applyForWriter: number;
}

interface Props {
  data: UsersData;
  title?: string;
}

const UsersPieChart: FC<Props> = ({ data, title = "User Distribution" }) => {
  const chartData = {
    labels: ["Active", "Inactive", "Blocked", "Writers", "Apply for Writer"],
    datasets: [
      {
        data: [
          data.active,
          data.inactive,
          data.blocked,
          data.writers,
          data.applyForWriter,
        ],
        backgroundColor: [
          "#4caf50",
          "#ff9800",
          "#f44336",
          "#2196f3",
          "#9c27b0",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 700,
        },
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      
    },
  };

  return (
    <div className="h-[400px] w-full bg-blue-500/10 shadow-md rounded-lg p-4 flex flex-col">
      <div className="flex-1 relative">
        <Pie data={chartData} options={options} key={JSON.stringify(data)} />
      </div>
    </div>
  );
};

export default UsersPieChart;
