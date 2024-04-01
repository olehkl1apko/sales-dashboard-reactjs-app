import { Table, Typography } from "antd";

import { Error } from "../../components";
import { useGetData } from "../../hooks";

function RecentOrders() {
  const { data, error, loading } = useGetData("/carts/1");

  const dataSource = data ? data.products.splice(0, 3) : [];

  if (error) <Error />;

  return (
    <>
      <Typography.Text>Recent Orders</Typography.Text>

      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource.map((order) => ({ ...order, key: order.id }))}
        pagination={false}
      />
    </>
  );
}

export default RecentOrders;
