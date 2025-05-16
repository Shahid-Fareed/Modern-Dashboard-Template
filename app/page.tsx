"use client";
import Sidebar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import { IoChevronForward, IoChevronBackOutline } from "react-icons/io5";

import { useLayoutEffect, useRef, useState } from "react";
import Card from "@/components/ui/Card";
import AreaSpaLine from "@/components/AreaSpaLine";
import Pie from "@/components/Pie";
import HorizontalBar from "@/components/HorizontalBar";
import CustomTable from "@/components/CustomTable";
import Tooltip from "@/components/ui/Tooltip";
import { Icon } from "@iconify/react";

const columns = [
  {
    Header: "Id",
    accessor: "id",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "Order",
    accessor: "order",
    Cell: (row) => {
      return <span>#{row?.cell?.value}</span>;
    },
  },
  {
    Header: "customer",
    accessor: "customer",
    Cell: (row) => {
      return (
        <div>
          <span className="inline-flex items-center">
            {/* <span className="w-7 h-7 rounded-full ltr:mr-3 rtl:ml-3 flex-none bg-slate-600">
              <img
                src={row?.cell?.value.image}
                alt=""
                className="object-cover w-full h-full rounded-full"
              />
            </span> */}
            <span className="text-sm text-slate-600 dark:text-slate-300 capitalize">
              {row?.cell?.value.name}
            </span>
          </span>
        </div>
      );
    },
  },
  {
    Header: "date",
    accessor: "date",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "quantity",
    accessor: "quantity",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "amount",
    accessor: "amount",
    Cell: (row) => {
      return <span>{row?.cell?.value}</span>;
    },
  },
  {
    Header: "status",
    accessor: "status",
    Cell: (row) => {
      return (
        <span className="block w-full">
          <span
            className={` inline-block px-3 min-w-[90px] text-center mx-auto py-1 rounded-[999px] bg-opacity-25 ${
              row?.cell?.value === "paid"
                ? "text-success-500 bg-success-500"
                : ""
            } 
            ${
              row?.cell?.value === "due"
                ? "text-warning-500 bg-warning-500"
                : ""
            }
            ${
              row?.cell?.value === "cancled"
                ? "text-danger-500 bg-danger-500"
                : ""
            }
            
             `}
          >
            {row?.cell?.value}
          </span>
        </span>
      );
    },
  },
  {
    Header: "action",
    accessor: "action",
    Cell: (row) => {
      return (
        <div className="flex space-x-3 rtl:space-x-reverse">
          <Tooltip content="View" placement="top" arrow animation="shift-away">
            <button className="action-btn" type="button">
              <Icon icon="heroicons:eye" />
            </button>
          </Tooltip>
          <Tooltip content="Edit" placement="top" arrow animation="shift-away">
            <button className="action-btn" type="button">
              <Icon icon="heroicons:pencil-square" />
            </button>
          </Tooltip>
          <Tooltip
            content="Delete"
            placement="top"
            arrow
            animation="shift-away"
            theme="danger"
          >
            <button className="action-btn" type="button">
              <Icon icon="heroicons:trash" />
            </button>
          </Tooltip>
        </div>
      );
    },
  },
];
const data1: TableRow[] = [
  {
    id: 40,
    order: 423,
    customer: {
      name: "Jenny Wilson",
    },
    date: "3/2/2022",
    quantity: 8,
    amount: "$2700.12",
    status: "cancled",
    action: null,
  },
  {
    id: 41,
    order: 703,
    customer: {
      name: "Jenny Wilson",
    },
    date: "12/8/2021",
    quantity: 8,
    amount: "$4508.13",
    status: "cancled",
    action: null,
  },
  {
    id: 42,
    order: 792,
    customer: {
      name: "Jenny Wilson",
    },
    date: "11/22/2021",
    quantity: 11,
    amount: "$4938.04",
    status: "due",
    action: null,
  },
  {
    id: 2,
    order: 238,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/6/2022",
    quantity: 13,
    amount: "$2215.78",
    status: "due",
    action: null,
  },
  {
    id: 3,
    order: 339,
    customer: {
      name: "Jenny Wilson",
    },
    date: "9/6/2021",
    quantity: 1,
    amount: "$3183.60",
    status: "due",
    action: null,
  },
  {
    id: 4,
    order: 365,
    customer: {
      name: "Jenny Wilson",
    },
    date: "11/7/2021",
    quantity: 13,
    amount: "$2587.86",
    status: "cancled",
    action: null,
  },
  {
    id: 5,
    order: 513,
    customer: {
      name: "Jenny Wilson",
    },
    date: "5/6/2022",
    quantity: 12,
    amount: "$3840.73",
    status: "paid",
    action: null,
  },
  {
    id: 6,
    order: 534,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/14/2022",
    quantity: 12,
    amount: "$4764.18",
    status: "cancled",
    action: null,
  },
  {
    id: 1,
    order: 951,
    customer: {
      name: "Jenny Wilson",
    },
    date: "3/26/2022",
    quantity: 13,
    amount: "$1779.53",
    status: "paid",
    action: null,
  },
  {
    id: 2,
    order: 238,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/6/2022",
    quantity: 13,
    amount: "$2215.78",
    status: "due",
    action: null,
  },
  {
    id: 3,
    order: 339,
    customer: {
      name: "Jenny Wilson",
    },
    date: "9/6/2021",
    quantity: 1,
    amount: "$3183.60",
    status: "due",
    action: null,
  },
  {
    id: 4,
    order: 365,
    customer: {
      name: "Jenny Wilson",
    },
    date: "11/7/2021",
    quantity: 13,
    amount: "$2587.86",
    status: "cancled",
    action: null,
  },
  {
    id: 5,
    order: 513,
    customer: {
      name: "Jenny Wilson",
    },
    date: "5/6/2022",
    quantity: 12,
    amount: "$3840.73",
    status: "paid",
    action: null,
  },
  {
    id: 6,
    order: 534,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/14/2022",
    quantity: 12,
    amount: "$4764.18",
    status: "cancled",
    action: null,
  },
  {
    id: 1,
    order: 951,
    customer: {
      name: "Jenny Wilson",
    },
    date: "3/26/2022",
    quantity: 13,
    amount: "$1779.53",
    status: "paid",
    action: null,
  },
  {
    id: 2,
    order: 238,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/6/2022",
    quantity: 13,
    amount: "$2215.78",
    status: "due",
    action: null,
  },
  {
    id: 3,
    order: 339,
    customer: {
      name: "Jenny Wilson",
    },
    date: "9/6/2021",
    quantity: 1,
    amount: "$3183.60",
    status: "due",
    action: null,
  },
  {
    id: 4,
    order: 365,
    customer: {
      name: "Jenny Wilson",
    },
    date: "11/7/2021",
    quantity: 13,
    amount: "$2587.86",
    status: "cancled",
    action: null,
  },
  {
    id: 5,
    order: 513,
    customer: {
      name: "Jenny Wilson",
    },
    date: "5/6/2022",
    quantity: 12,
    amount: "$3840.73",
    status: "paid",
    action: null,
  },
  {
    id: 6,
    order: 534,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/14/2022",
    quantity: 12,
    amount: "$4764.18",
    status: "cancled",
    action: null,
  },
  {
    id: 1,
    order: 951,
    customer: {
      name: "Jenny Wilson",
    },
    date: "3/26/2022",
    quantity: 13,
    amount: "$1779.53",
    status: "paid",
    action: null,
  },
  {
    id: 2,
    order: 238,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/6/2022",
    quantity: 13,
    amount: "$2215.78",
    status: "due",
    action: null,
  },
  {
    id: 3,
    order: 339,
    customer: {
      name: "Jenny Wilson",
    },
    date: "9/6/2021",
    quantity: 1,
    amount: "$3183.60",
    status: "due",
    action: null,
  },
  {
    id: 4,
    order: 365,
    customer: {
      name: "Jenny Wilson",
    },
    date: "11/7/2021",
    quantity: 13,
    amount: "$2587.86",
    status: "cancled",
    action: null,
  },
  {
    id: 5,
    order: 513,
    customer: {
      name: "Jenny Wilson",
    },
    date: "5/6/2022",
    quantity: 12,
    amount: "$3840.73",
    status: "paid",
    action: null,
  },
  {
    id: 6,
    order: 534,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/14/2022",
    quantity: 12,
    amount: "$4764.18",
    status: "cancled",
    action: null,
  },

  {
    id: 1,
    order: 951,
    customer: {
      name: "Jenny Wilson",
    },
    date: "3/26/2022",
    quantity: 13,
    amount: "$1779.53",
    status: "paid",
    action: null,
  },
  {
    id: 2,
    order: 238,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/6/2022",
    quantity: 13,
    amount: "$2215.78",
    status: "due",
    action: null,
  },
  {
    id: 3,
    order: 339,
    customer: {
      name: "Jenny Wilson",
    },
    date: "9/6/2021",
    quantity: 1,
    amount: "$3183.60",
    status: "due",
    action: null,
  },
  {
    id: 4,
    order: 365,
    customer: {
      name: "Jenny Wilson",
    },
    date: "11/7/2021",
    quantity: 13,
    amount: "$2587.86",
    status: "cancled",
    action: null,
  },
  {
    id: 5,
    order: 513,
    customer: {
      name: "Jenny Wilson",
    },
    date: "5/6/2022",
    quantity: 12,
    amount: "$3840.73",
    status: "paid",
    action: null,
  },
  {
    id: 6,
    order: 534,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/14/2022",
    quantity: 12,
    amount: "$4764.18",
    status: "cancled",
    action: null,
  },
  {
    id: 1,
    order: 951,
    customer: {
      name: "Jenny Wilson",
    },
    date: "3/26/2022",
    quantity: 13,
    amount: "$1779.53",
    status: "paid",
    action: null,
  },
  {
    id: 2,
    order: 238,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/6/2022",
    quantity: 13,
    amount: "$2215.78",
    status: "due",
    action: null,
  },
  {
    id: 3,
    order: 339,
    customer: {
      name: "Jenny Wilson",
    },
    date: "9/6/2021",
    quantity: 1,
    amount: "$3183.60",
    status: "due",
    action: null,
  },
  {
    id: 4,
    order: 365,
    customer: {
      name: "Jenny Wilson",
    },
    date: "11/7/2021",
    quantity: 13,
    amount: "$2587.86",
    status: "cancled",
    action: null,
  },
  {
    id: 5,
    order: 513,
    customer: {
      name: "Jenny Wilson",
    },
    date: "5/6/2022",
    quantity: 12,
    amount: "$3840.73",
    status: "paid",
    action: null,
  },
  {
    id: 6,
    order: 534,
    customer: {
      name: "Jenny Wilson",
    },
    date: "2/14/2022",
    quantity: 12,
    amount: "$4764.18",
    status: "cancled",
    action: null,
  },
  {
    id: 1,
    order: 951,
    customer: {
      name: "Jenny Wilson",
    },
    date: "3/26/2022",
    quantity: 13,
    amount: "$1779.53",
    status: "paid",
    action: null,
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  return (
    <>
      <div className="wrapper grid grid-cols-7">
        <Sidebar />
        <div className="col-start-2 col-span-6">
          <TopBar />
          <main className="grid grid-cols-1 lg:grid-cols-2 p-5">
            <div className="grid grid-cols-4 col-span-2 gap-5">
              <div className="col-span-1 border border-[#EFF2F4] hover:border-[#4E8CF7] p-5">
                <p>Total Revenue</p>
                <span className="text-xl font-bold w-full">AED 3,676.25</span>
              </div>
              <div className="col-span-1 border border-[#EFF2F4] hover:border-[#4E8CF7] p-5">
                <p>Total Revenue</p>
                <span className="text-xl font-bold w-full">AED 3,676.25</span>
              </div>
              <div className="col-span-1 border border-[#EFF2F4] hover:border-[#4E8CF7] p-5">
                <p>Total Revenue</p>
                <span className="text-xl font-bold w-full">AED 3,676.25</span>
              </div>
              <div className="col-span-1 border border-[#EFF2F4] hover:border-[#4E8CF7] p-5">
                <p>Total Revenue</p>
                <span className="text-xl font-bold w-full">AED 3,676.25</span>
              </div>
            </div>

            <Card title="Area Chart" className="col-span-2 p-0">
              <AreaSpaLine />
            </Card>
            <div className="col-span-2 grid grid-cols-2">
              <div className="col-span-1">
                <Card title="Pie & Donut Chart">
                  <Pie />
                </Card>
              </div>
              <Card title="Horizontal Bar">
                <HorizontalBar />
              </Card>
            </div>

            <div className="col-span-2">
              <CustomTable
                columns={columns}
                data={data1}
                title="Page 1 Table"
              />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
