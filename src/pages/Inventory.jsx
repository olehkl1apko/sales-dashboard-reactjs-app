import { Avatar, Rate, Space, Table, Typography } from "antd";

import { Error } from "../components";
import { useGetData } from "../hooks";

function Inventory() {
  const { data, error, loading } = useGetData("/products");

  if (error) <Error />;

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Inventory</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Thumbnail",
            dataIndex: "thumbnail",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
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
            title: "Rating",
            dataIndex: "rating",
            render: (rating) => {
              return <Rate value={rating} allowHalf disabled />;
            },
          },
          {
            title: "Stock",
            dataIndex: "stock",
          },

          {
            title: "Brand",
            dataIndex: "brand",
          },
          {
            title: "Category",
            dataIndex: "category",
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
export default Inventory;
