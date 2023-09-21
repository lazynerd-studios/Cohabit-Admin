"use client";
import { useEffect, useState } from "react";
import qs from "querystring";
import { useRouter } from "next/navigation";
import {
  CustomTable as Table,
  ActionButton as Button,
  CustomInlineInput as Input,
  CustomButton as PrimaryButton,
} from "@/lib/AntDesignComponents";
import type { ColumnsType, TablePaginationConfig } from "antd/es/table";
import TableIcon from "@/assets/icons/TableIcon";
import EditIcon from "@/assets/icons/EditIcon";
import FilterIcon from "@/assets/icons/FilterIcon";
import SearchIcon from "@/assets/icons/SearchIcon";
import AddAdminModal from "./AddAdminModal";

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

const AdminTable = () => {
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
      title: "#",
      render: (value, record, index) => `${index + 1}`,
      width: "10%",
    },
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
          <p>Role</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "role",
      render: (role) => `${role}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Last Active</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "active",
      render: (active) => `${active}`,
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
      render: (status) => (
        <span className="p-[3%] rounded-[80px] bg-[#2AD0621A]/[10%] text-[14px] font-[400]">
          {status}
        </span>
      ),
      width: "15%",
    },
    {
      dataIndex: "role_id",
      render: () => <Button icon={<EditIcon />}>Change role</Button>,
      width: "20%",
    },
    { dataIndex: "_id", render: (id) => "...", width: "10%" },
  ];

  const fetchData = () => {
    setLoading(true);
    fetch(`https://testapi.io/api/sikiru/cohabit-admin`)
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

  return (
    <>
      <div className="grid grid-cols-1 gap-[0.5rem]">
        <div className="grid grid-cols-2">
          <span className="text-[#25324B] text-[20px] font-[700]">
            10 Admins
          </span>
          <div className="flex items-center gap-[0.5rem]">
            <Input
              placeholder="Search Admins"
              prefix={<SearchIcon className="stroke-[#A8ADB7]" />}
            />
            <span className="flex items-center gap-[0.5rem] border border-[#D6DDEB] p-[1%] rounded-[6px]">
              <FilterIcon />
              <p className="text-[#25324B] text-[16px] font-[400]">Filter</p>
            </span>
            <PrimaryButton
              onClick={() => {
                setOpen(true);
              }}
              className="solid-btn"
              type="primary"
            >
              Add Admin
            </PrimaryButton>
          </div>
        </div>
        <Table
          columns={columns}
          //   rowKey={(record) => record.login.uuid}
          scroll={{ y: 500 }}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={loading}
          onChange={handleTableChange}
        />
      </div>
      <AddAdminModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AdminTable;
