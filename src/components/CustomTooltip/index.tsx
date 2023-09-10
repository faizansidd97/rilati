import { Tooltip } from "antd";

const CustomTooltip = (props: any) => {
  return (
    <div>
      <Tooltip color="#3e3e3e" style={{ textAlign: "center" }} {...props}>
        {props?.children}
      </Tooltip>
    </div>
  );
};

export default CustomTooltip;
