"use client";
import { useEffect, useState } from "react";
import qs from "querystring";
import { useRouter } from "next/navigation";
import {
  CustomTable as Table,
  ActionButton as Button,
  CustomDatePicker as DatePicker,
  CustomInlineInput as Input,
  CustomSelect as Select,
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

const PaymentsTable = () => {
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
    { label: "All Houses", value: "All Houses" },
    { label: "Open Houses", value: "Open Houses" },
    { label: "Rented Houses", value: "Rented Houses" },
    { label: "Verified Houses", value: "Verified Houses" },
    { label: "Unverified Houses", value: "Unverified Houses" },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span className="flex items-center">
          <p>Full Name</p>
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
          <p>Payment Date</p>
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
          <p>Payment Type</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "type",
      render: (type) => `${type}`,
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
            push("payment-requests/1");
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
    fetch(`https://testapi.io/api/sikiru/payment-requests`)
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
    <div className="grid grid-cols-1 gap-[0.5rem]">
      <div className="flex items-start gap-[0.2rem] md:gap-[1rem] justify-start">
        <div>
          <DatePicker placeholder="Start Date" />
        </div>
        <div>
          <DatePicker placeholder="End Date" />
        </div>
        <div>
          <Select defaultValue={filter[0]} options={filter} />
        </div>
        <div>
          <Input placeholder="Amount" />
        </div>
      </div>
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

export default PaymentsTable;
