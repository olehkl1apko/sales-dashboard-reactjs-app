import { Space, Table, Typography } from "antd";

import { Error } from "../components";
import { useGetData } from "../hooks";

function Orders() {
  const { data, error, loading } = useGetData("/carts/1");

  if (error) <Error />;

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Orders</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Price",
            dataIndex: "price",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "DiscountedPrice",
            dataIndex: "discountedPrice",
            render: (value) => <span>${value}</span>,
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Total",
            dataIndex: "total",
          },
        ]}
        dataSource={data?.products.map((product) => ({
          ...product,
          key: product.id,
        }))}
        pagination={{
          pageSize: 10,
        }}
      ></Table>
    </Space>
  );
}

export default Orders;
