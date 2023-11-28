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

import AddRoleModal from "./AddRoleModal";
import { useGetUserRolesQuery } from "@/redux/api/adminApi";
import { message } from "antd";

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
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const { data: roleData, isSuccess: roleSuccess, isError: roleIsError, error: roleError } = useGetUserRolesQuery({})

  const [roleSet, setRoleSet] = useState<Record<string, any>[]>([])

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
      dataIndex: "user_type",
      render: (user_type) => `${user_type}`,
      width: "25%",
    },
    // {
    //   title: (
    //     <span className="flex items-center">
    //       <p>Status</p>
    //       <TableIcon />
    //     </span>
    //   ),
    //   dataIndex: "status",
    //   render: (status) =>
    //     status === "active" ? (
    //       <span className="p-[3%] rounded-[80px] text-[#71DD37] bg-[#72E1281F]/[12%] text-[14px] font-[400]">
    //         {status}
    //       </span>
    //     ) : (
    //       <span className="p-[3%] rounded-[80px] text-[#FFAB00] bg-[#FDB5281F]/[12%] text-[14px] font-[400]">
    //         {status}
    //       </span>
    //     ),
    //   width: "15%",
    // },
    {
      title: "Action",
      dataIndex: "_id",
      render: (id) => "...",
      width: "10%",
      fixed: "right",
    },
  ];

  useEffect(() => {
    if (roleSuccess) {
      setRoleSet(roleData?.data ?? [])
    }

    if (roleIsError) {
      const errMesg = roleError as any
      message.error(errMesg?.data?.message)
    }
  }, [roleData?.data, roleError, roleIsError, roleSuccess, setOpen])

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: 1,
      pageSize: 10,
      total: roleSet?.length,
    },
  });

  const handleTableChange = (pagination: TablePaginationConfig) => {
    setTableParams({
      pagination,
    });

    // `dataSource` is useless since `pageSize` changed
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setRoleSet([]);
    }
  };

  // const rowSelection = {
  //   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
  //     console.log(
  //       `selectedRowKeys: ${selectedRowKeys}`,
  //       "selectedRows: ",
  //       selectedRows
  //     );
  //   },
  //   getCheckboxProps: (record: DataType) => ({
  //     disabled: record.name === "Disabled User", // Column configuration not to be checked
  //     name: record.name,
  //   }),
  // };

  return (
    <>
      <div className="grid grid-cols-1 gap-[0.5rem]">
        <div className="flex flex-col md:flex-row items-start gap-[0.5rem] md:items-center justify-between">
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
          // rowSelection={{
          //   ...rowSelection,
          // }}
          scroll={{ y: 500, x: 800 }}
          dataSource={roleSet}
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
