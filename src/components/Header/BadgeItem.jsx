import { MailOutlined } from "@ant-design/icons";
import { Badge } from "antd";

const BadgeItem = ({ count, onClick }) => {
  return (
    <Badge count={count}>
      <MailOutlined style={{ fontSize: 24 }} onClick={onClick} />
    </Badge>
  );
};

export default BadgeItem;
