import { Card } from "antd";
import { Bar } from "react-chartjs-2";

import { Error } from "../../components";
import { useGetData } from "../../hooks";

function DashboardChart() {
  const { data: carts, error, loading } = useGetData("/carts");

  let revenue = null;

  if (carts) {
    const labels = carts.carts.map((cart) => `User-${cart.userId}`);
    const data = carts.carts.map((cart) => cart.discountedTotal);

    revenue = {
      labels,
      datasets: [
        {
          label: "Revenue",
          data: data,
          backgroundColor: "rgba(255, 0, 0, 1)",
        },
      ],
    };
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  if (loading) {
    return <div className="header">Loading...</div>;
  }

  if (error) <Error />;

  if (revenue) {
    return (
      <Card style={{ width: 800, height: 350 }}>
        <Bar options={options} data={revenue} />
      </Card>
    );
  }

  return null;
}

export default DashboardChart;
