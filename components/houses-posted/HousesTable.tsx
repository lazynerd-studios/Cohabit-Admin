"use client";
import { useCallback, useEffect, useState } from "react";
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
import { useGetAdminHouseListingsQuery } from "@/redux/api/adminApi";
import moment from "moment";
import { RadioChangeEvent } from "antd";

interface DataType {
  id: number;
  house_type_name: string;
  status: string;
  created_at: string;
  price: string;
  verification: string;
}

interface TableParams {
  pagination?: TablePaginationConfig;
}


const HousesTable = () => {
  const { push } = useRouter();
  const [data, setData] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);

  const [verifyFilter, setVerifyFilter] = useState<string>();
  const [openFilter, setOpenFilter] = useState<string>();

  const [path, setPath] = useState<string>("admin/listings");
  const verifiedFilterOptions = [
    { label: "All", value: "" },
    { label: "Verified", value: "1" },
    { label: "Unverified", value: "0" },
  ];
  const openFilterOptions = [
    { label: "All", value: "" },
    { label: "Rented", value: "rented" },
    { label: "Available", value: "available" },
    { label: "Sold", value: "sold" },

  ];
  const [count, setCount] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const { data: houses, isSuccess, isError, error, isLoading } = useGetAdminHouseListingsQuery({
    path
  })

  const handleOpenFilterChange = useCallback((e: RadioChangeEvent) => setOpenFilter(e.target.value), []);
  const handleVerifyFilterChange = useCallback((e: RadioChangeEvent) => setVerifyFilter(e.target.value), []);

  const handleResetFilters = () => {
    setVerifyFilter(undefined);
    setOpenFilter(undefined);
    setPath("admin/listings");
  };
  useEffect(() => {
    if (isSuccess) {
      setCount(houses?.per_page);
      setPage(houses?.current_page);
      setData(houses?.data);
    }

    if (verifyFilter) {
      setPath(`admin/listings?rented=${openFilter}`)
    }
    if (openFilter) {
      setPath(`admin/listings?verified=${verifyFilter}`)
    }

    if (!verifyFilter && !openFilter) {
      setPath(`admin/listings`)
    }

    if (verifyFilter && openFilter) {
      setPath(`admin/listings?verified=${verifyFilter}&rented=${openFilter}`)
    }

    if (isError) {
      console.log(error);
    }
  }, [error, houses, isError, isSuccess, openFilter, verifyFilter])


  console.log(verifyFilter, openFilter);

  const [tableParams, setTableParams] = useState<TableParams>({
    pagination: {
      current: page,
      pageSize: count,
    },
  });
  const columns: ColumnsType<DataType> = [
    {
      title: (
        <span className="flex items-center w-full">
          <p>Property Name</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "house_type_name",
      render: (house_type_name) => `${house_type_name}`,
      width: "20%",
    },
    {
      title: (
        <span className="flex items-center">
          <p>Amount</p>
          <TableIcon />
        </span>
      ),
      dataIndex: "price",
      render: (price) => `${price}`,
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
      render: (created_at) => `${moment(created_at).format("DD/MM/YYYY")}`,
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
            push(`houses-posted/${id}`);
            sessionStorage.setItem("houseId", id.toString());
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
      <div className="flex items-center gap-[2rem] my-[1.2rem]">
        <span className="text-[16px] font-[600] text-[#32475C] cursor-pointer" onClick={
          handleResetFilters
        }>Reset Filters</span>
        <RadioGroup
          optionType="button"
          onChange={handleOpenFilterChange}

        >
          <div className="flex  justify-start items-center gap-[0.5rem] max-w-fit">
            {openFilterOptions?.map((e, i) => (
              <div className="w-full" key={i}>
                <RadioButton
                  style={{
                    color:
                      openFilter === e.value
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
        <RadioGroup
          optionType="button"
          onChange={handleVerifyFilterChange}
        >
          <div className="flex  justify-start items-center gap-[0.5rem] max-w-fit">
            {verifiedFilterOptions?.map((e, i) => (
              <div className="w-full" key={i}>
                <RadioButton
                  style={{
                    color:
                      verifyFilter === e.value
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
      </div>
      <Table
        columns={columns}
        scroll={{ y: 600, x: 800 }}
        dataSource={data}
        pagination={tableParams?.pagination}
        loading={isLoading}
        onChange={handleTableChange}
      />
    </div>
  );
};

export default HousesTable;
