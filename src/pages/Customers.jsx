import { Avatar, Space, Table, Typography } from "antd";

import { Error } from "../components";
import { useGetData } from "../hooks";

function Customers() {
  const { data, error, loading } = useGetData("/users");

  if (error) <Error />;

  return (
    <Space size={20} direction="vertical">
      <Typography.Title level={4}>Customers</Typography.Title>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link) => {
              return <Avatar src={link} />;
            },
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "address",
            dataIndex: "address",
            render: (address) => {
              return (
                <span>
                  {address.address}, {address.city}
                </span>
              );
            },
          },
        ]}
        dataSource={data?.users.map((user) => ({ ...user, key: user.id }))}
        pagination={{
          pageSize: 10,
        }}
      />
    </Space>
  );
}
export default Customers;
