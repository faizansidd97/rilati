import { Input } from "antd";
import React, { memo } from "react";
import "./CustomSearch.less";

const CustomSearch = (props) => {
    const { Search } = Input;
    return (
        <span className="kl-custom-search-container">
            <Search {...props} />
        </span>
    );
};

export default memo(CustomSearch);
