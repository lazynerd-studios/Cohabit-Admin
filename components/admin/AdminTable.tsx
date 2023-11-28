"use client";
import { useCallback, useEffect, useState } from "react";
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
import { useGetAdminsQuery } from "@/redux/api/adminApi";
import moment from "moment";
import { debounce } from "lodash"

interface DataType {
  name: string;
  user_type: boolean;
  email: string;
  created_at: string;
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

  const { data: stats, isSuccess, isError, error, isLoading } = useGetAdminsQuery({})

  useEffect(() => {
    if (isSuccess) {
      setData(stats?.data ?? []);
    }
    if (isError) {
      console.log(error);
    }
  }, [error, isError, isSuccess, stats]);


  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: stats?.length,
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
          <p>Gender</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "user_type",
      render: (user_type) => `${user_type}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Last Active</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "created-at",
      render: (created_at) => `${moment(created_at).format("DD/MM/YYYY")}`,
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
          {status === null ? "Pending" : "Active"}
        </span>
      ),
      width: "15%",
    },
    {
      dataIndex: "role_id",
      render: () => <Button icon={<EditIcon />}>Change role</Button>,
      width: "20%",
    },
    { dataIndex: "_id", render: (id) => "...", width: "10%", fixed: "right" },
  ];


  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  const [search, setSearch] = useState<string>("")


  const debouncedSearch = useCallback(
    debounce((searchText: string) => {
      if (!searchText) {
        setData(stats?.data ?? []);
        return;
      }
      const filteredData = (stats?.data || []).filter((permission: Record<string, any>) =>
        permission?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setData(filteredData);
    }, 500), // Adjust the debounce delay (in milliseconds) according to your preference
    [stats?.data]
  );

  const handleAdminSearch = (searchText: string) => {
    setSearch(searchText);
    debouncedSearch(searchText);

  }

  useEffect(() => {
    handleAdminSearch(search);
  }, [handleAdminSearch, search]);
  return (
    <>
      <div className="grid grid-cols-1 gap-[0.5rem]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <span className="text-[#25324B] text-[20px] font-[700]">
            {data?.length} Admins
          </span>
          <div className="flex items-center gap-[0.5rem]">
            <Input
              placeholder="Search Admins"
              value={search}
              onChange={(e) => handleAdminSearch(e.target.value)}
              prefix={<SearchIcon className="stroke-[#A8ADB7]" />}
            />
            {/* <span className="flex items-center gap-[0.5rem] border border-[#D6DDEB] p-[1%] rounded-[6px]">
              <FilterIcon />
              <p className="text-[#25324B] text-[16px] font-[400]">Filter</p>
            </span> */}
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
          scroll={{ y: 600, x: 800 }}
          dataSource={data}
          pagination={tableParams.pagination}
          loading={isLoading}
          onChange={handleTableChange}
        />
      </div>
      <AddAdminModal open={open} setOpen={setOpen} />
    </>
  );
};

export default AdminTable;
