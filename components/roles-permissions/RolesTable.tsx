"use client";
import { useEffect, useState } from "react";
import qs from "querystring";
import { useRouter } from "next/navigation";
import {
  CustomTable as Table,
  CustomInlineInput as Input,
  CustomButton as Button,
} from "@/lib/AntDesignComponents";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import TableIcon from "@/assets/icons/TableIcon";
import ExportIcon from "@/assets/icons/ExportIcon";
import FilterIcon from "@/assets/icons/FilterIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import AddRoleModal from "./AddRoleModal";

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

const RolesTable = () => {
  const { push } = useRouter();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span className="flex items-center">
          <p>User</p>
        </span>
      ),
      dataIndex: "name",
      render: (name) => `${name}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Email</p>
        </span>
      ),
      dataIndex: "email",
      render: (email) => `${email}`,
      width: "25%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Role</p>
        </span>
      ),
      dataIndex: "role",
      render: (role) => `${role}`,
      width: "25%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Status</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "status",
      render: (status) =>
        status === "active" ? (
          <span className="p-[3%] rounded-[80px] text-[#71DD37] bg-[#72E1281F]/[12%] text-[14px] font-[400]">
            {status}
          </span>
        ) : (
          <span className="p-[3%] rounded-[80px] text-[#FFAB00] bg-[#FDB5281F]/[12%] text-[14px] font-[400]">
            {status}
          </span>
        ),
      width: "15%",
    },
    { title: "Action", dataIndex: "_id", render: (id) => "...", width: "10%" },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch(`https://testapi.io/api/sikiru/roles`)
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
  }, [JSON.stringify(tableParams)]);

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-[0.5rem]">
        <div className="flex items-center justify-between">
          <Button
            className="w-fit flex items-center justify-center"
            icon={<ExportIcon className="p-0 m-0" />}
          >
            EXPORT
          </Button>
          <div className="flex items-center gap-[0.5rem]">
            <Button
              onClick={() => {
                setOpen(true);
              }}
              className="solid-btn"
              type="primary"
            >
              Add Role and Permission
            </Button>
          </div>
        </div>
        <Table
          columns={columns}
          //   rowKey={(record) => record.login.uuid}
          rowSelection={{
            ...rowSelection,
          }}
          scroll={{ y: 500 }}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
      <AddRoleModal open={open} setOpen={setOpen} />
    </>
  );
};

export default RolesTable;
