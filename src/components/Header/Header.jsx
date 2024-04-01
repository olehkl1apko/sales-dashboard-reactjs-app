import { Drawer, Image, List, Space, Typography } from "antd";
import { useState } from "react";

import { useGetData } from "../../hooks";
import BadgeItem from "./BadgeItem";

function Header() {
  const {
    data: orders,
    error: ordersError,
    loading: ordersLoading,
  } = useGetData("/carts/1");
  const {
    data: comments,
    error: commentsError,
    loading: commentsLoading,
  } = useGetData("comments");
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  if (ordersLoading || commentsLoading) {
    return <div className="header">Loading...</div>;
  }

  return (
    <div className="header">
      <Image
        width={40}
        src="https://ps.w.org/ultimate-dashboard/assets/icon-256x256.png?rev=2859260"
      ></Image>
      <Typography.Title>Sales Dashboard</Typography.Title>
      <Space size="large">
        {!commentsError && (
          <BadgeItem
            count={comments.comments.length}
            onClick={() => {
              setCommentsOpen(true);
            }}
          />
        )}
        {!ordersError && (
          <BadgeItem
            count={orders.products.length}
            onClick={() => {
              setNotificationsOpen(true);
            }}
          />
        )}
      </Space>
      {!commentsError && (
        <Drawer
          title="Comments"
          open={commentsOpen}
          onClose={() => {
            setCommentsOpen(false);
          }}
          maskClosable
        >
          <List
            dataSource={comments.comments}
            renderItem={(item) => {
              return <List.Item>{item.body}</List.Item>;
            }}
          />
        </Drawer>
      )}
      {!ordersError && (
        <Drawer
          title="Notifications"
          open={notificationsOpen}
          onClose={() => {
            setNotificationsOpen(false);
          }}
          maskClosable
        >
          <List
            dataSource={orders.products}
            renderItem={(item) => {
              return (
                <List.Item>
                  <Typography.Text strong>{item.title}</Typography.Text> has
                  been ordered!
                </List.Item>
              );
            }}
          />
        </Drawer>
      )}
    </div>
  );
}

export default Header;
