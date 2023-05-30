import { Empty } from "antd";

const EmptyState = ({ desc = "No data found" }) => {
  return <Empty description={desc} />;
};

export default EmptyState;
