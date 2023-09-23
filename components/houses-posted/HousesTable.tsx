"use client";
import { useEffect, useState } from "react";
import qs from "querystring";
import { useRouter } from "next/navigation";
import {
  CustomTable as Table,
  ActionButton as Button,
  ThemeRadioButton as RadioButton,
  ThemeRadioGroup as RadioGroup,
} from "@/lib/AntDesignComponents";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import TableIcon from "@/assets/icons/TableIcon";

interface DataType {
  name: string;
  status: string;
  email: string;
  date: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
}

const getRandomuserParams = (params: TableParams) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const HousesTable = () => {
  const { push } = useRouter();
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const [currentFilter, setCurrentFilter] = useState("All Houses");
  const filter = [
    { label: "All", value: "All Houses" },
    { label: "Open", value: "Open Houses" },
    { label: "Rented", value: "Rented Houses" },
    { label: "Verified", value: "Verified Houses" },
    { label: "Unverified", value: "Unverified Houses" },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span className="flex items-center w-full">
          <p>Property Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "name",
      render: (name) => `${name}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Amount</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "amount",
      render: (amount) => `${amount}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Status</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "status",
      render: (status) => `${status}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Date Posted</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "date",
      render: (date) => `${date}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Verification</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "verification",
      render: (verification) => `${verification}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Action</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "id",
      render: (id) => (
        <Button
          onClick={() => {
            push("houses-posted/1");
          }}
          className="text-[14px] font-[600] solid-action-btn"
        >
          View Details
        </Button>
      ),
      width: "20%",
      fixed: "right",
    },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch(`https://run.mocky.io/v3/e6dd2705-996e-49c9-8141-0835a389fbfa`)
      .then((res) => res.json())
      .then((results) => {
        setData(results);
        setLoading(false);
        setTableParams({
          ...tableParams,
          pagination: {
            ...tableParams.pagination,
            total: 200,
            // 200 is mock data, you should read it from server
            // total: data.totalCount,
          },
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, [JSON.stringify(tableParams), currentFilter]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  return (
    <div className="grid grid-cols-1">
      <RadioGroup
        optionType="button"
        defaultValue={"All Houses"}
        onChange={(e) => setCurrentFilter(e.target.value)}
        className="overflow-x-scroll"
      >
        <div className="flex md:grid md:grid-cols-5 justify-start items-center gap-[0.5rem] max-w-fit">
          {filter.map((e, i) => (
            <div className="w-full" key={i}>
              <RadioButton
                style={{
                  color:
                    currentFilter === e.value
                      ? "#FFF"
                      : "rgba(50, 71, 92, 0.87)",
                }}
                value={e.value}
                key={i}
              >
                {e.label}
              </RadioButton>
            </div>
          ))}
        </div>
      </RadioGroup>
      <Table
        columns={columns}
        //   rowKey={(record) => record.login.uuid}
        scroll={{ y: 500, x: 800 }}
        dataSource={data}
        pagination={tableParams.pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default HousesTable;
