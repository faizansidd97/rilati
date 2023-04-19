import { memo } from "react";
import { Col, Row, Table } from "antd";
import { useEffect } from "react";
import CustomSearch from "../CustomSearch/CustomSearch";
import { FaSearch } from "react-icons/fa";
import "./Gridview.less";

const GridView = (props) => {
  const {
    data = null,
    className = "",
    pagination = {
      currentPage: 1,
      pageSize: 10,
      total: 10,
    },
    listingCallback = () => {},
    filtersRender = false,
    isSearchAvailable = false,
    disableInitialCall = false,
  } = props;

  let uniqueId = 0;
  let isMounted = true;

  useEffect(() => {
    async function load() {
      if (!disableInitialCall) {
        await listingCallback();
      }
    }

    if (isMounted) load();

    return () => (isMounted = false);
  }, []);

  const onFinishSearch = async (value) => {
    const payload = { search: value };
    await listingCallback(payload);
  };

  const handleOnChange = async (pagination, filters, sorter = {}) => {
    if (Object.keys(sorter).length != 0) {
      let payload = {};
      if (Array.isArray(sorter)) {
        payload = sorter.map((singleSorter) => {
          return {
            column: singleSorter.columnKey,
            order: singleSorter.order,
          };
        });
      } else {
        payload = {
          column: sorter?.columnKey,
          order: sorter?.order,
        };
      }

      await listingCallback(payload);
    }
  };

  return (
    <>
      {/* FILTERS & SEARCH FUNCTIONALITIES */}
      {(filtersRender || isSearchAvailable) && (
        <div className="topHeader">
          <Row>
            <Col span={12}>{filtersRender && filtersRender()}</Col>
            <Col
              span={12}
              display="flex"
              justify="end"
              align="bottom"
              className="kl-colalignRight"
            >
              {isSearchAvailable && (
                <CustomSearch
                  placeholder={props?.searchPlaceholder || "Search logs"}
                  allowClear
                  onSearch={onFinishSearch}
                  suffix={<FaSearch />}
                />
              )}
            </Col>
          </Row>
        </div>
      )}

      {/* ONLY TABLE COMPONENT */}
      <div className="custom-table-grid-view-container">
        <Table
          {...props}
          className={`${className} custom-table-container cardWithStyle`}
          dataSource={data}
          onChange={handleOnChange}
          rowKey={(record) => {
            if (!record?.id) {
              return ++uniqueId;
            }
            return record?.id;
          }}
          pagination={{
            currentPage: pagination.currentPage,
            pageSize: pagination.pageSize,
            total: pagination.total,
            onChange: (page, pageSize) => {
              listingCallback({
                page: page,
                take: pageSize,
              });
            },
          }}
        />
      </div>
    </>
  );
};

export default memo(GridView);
