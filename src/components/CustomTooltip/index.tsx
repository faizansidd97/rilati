import { Tooltip } from "antd";
import { useState } from "react";

const CustomTooltip = (props: any) => {
  const width = window.innerWidth;

  return (
    <>
      {width > 768 ? (
        <div>
          <Tooltip color="#3e3e3e" style={{ textAlign: "center" }} {...props}>
            {props?.children}
          </Tooltip>
        </div>
      ) : (
        <span>{props.children}</span>
      )}
    </>
  );
};

export default CustomTooltip;
