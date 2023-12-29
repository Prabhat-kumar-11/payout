import React from "react";
import Layout from "../components/Layout";
import HelpIcon from "../assets/NavbarIcons/HelpIcon";
import RightChevronIcon from "../assets/RightChevronIcon";
import SearchInput from "../components/SearchInput";
import SortIcon from "../assets/SortIcon";
import DownChevronIcon from "../assets/DownChevronIcon";
import DownloadTableIcon from "../assets/downloadTableIcon";

const orderData = [
  {
    id: "#281807",
    status: "Processing",
    transaction: "131024932984292",
    amount: "₹1,125.00",
    date: "Today, 08:45 PM",
  },
  {
    id: "#281808",
    status: "Successful",
    transaction: "131024235646422",
    amount: "₹950.50",
    date: "Yesterday, 3:00 PM",
  },
  {
    id: "#281809",
    status: "Processing",
    transaction: "161024275636112",
    amount: "₹780.25",
    date: "12 Jul 2023, 08:45 PM",
  },
  {
    id: "#281810",
    status: "Successful",
    transaction: "157234323323849",
    amount: "₹1,200.75",
    date: "Today, 08:45 PM",
  },
  {
    id: "#281811",
    status: "Processing",
    transaction: "164952343204233",
    amount: "₹600.00",
    date: "Today, 08:45 PM",
  },
  {
    id: "#281812",
    status: "Successful",
    transaction: "182343204233468",
    amount: "₹850.20",
    date: "12 Jul 2023, 3:45 PM",
  },
  {
    id: "#281813",
    status: "Processing",
    transaction: "234356732047378",
    amount: "₹500.75",
    date: "Today, 08:45 PM",
  },
  {
    id: "#281814",
    status: "Successful",
    transaction: "423346812234320",
    amount: "₹1,000.50",
    date: "Today, 08:45 PM",
  },
  {
    id: "#281815",
    status: "Processing",
    transaction: "042333246823455",
    amount: "₹720.80",
    date: "Today, 08:45 PM",
  },
  {
    id: "#281816",
    status: "Successful",
    transaction: "723432045233468",
    amount: "₹1,150.25",
    date: "Yesterday, 3:00 PM",
  },
];

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center gap-2">
          <h3 className="text-[1.25rem] font-medium">Overview</h3>
          <button className="flex items-center gap-2 border border-solid  bg-white border-[#D9D9D9] rounded-md px-[0.75rem] py-[0.38rem]">
            This Month
            <DownChevronIcon />
          </button>
        </div>
        <div className="flex flex-wrap gap-[1.25rem] mt-6 mb-8">
          <div className="flex-1 min-w-[23rem] text-white bg-[#146EB4] rounded-[0.5rem]">
            <div className="p-5">
              <div className="flex items-center gap-2">
                <span className="-mt-[2px]">Next Payout</span> <HelpIcon />
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[2rem]">₹2,312.23</span>
                <span className="underline flex items-center">
                  23 orders <RightChevronIcon />
                </span>
              </div>
            </div>
            <div className="flex justify-between gap-2 px-[1.5rem] py-[0.5rem] bg-[#0E4F82] rounded-[0.5rem]">
              <span>Next payout date:</span>
              <span>Today, 04:00PM</span>
            </div>
          </div>
          <div className="flex-1 min-w-[23rem] rounded-[0.5rem] bg-white shadow-md h-fit ">
            <div className="p-5">
              <div className="flex items-center gap-2">
                <span className="-mt-[2px]">Amount Pending</span> <HelpIcon />
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[2rem]">₹92,312.20</span>
                <span className="underline flex items-center text-[#146EB4]">
                  23 orders <RightChevronIcon />
                </span>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-[23rem] rounded-[0.5rem] bg-white shadow-md h-fit ">
            <div className="p-5">
              <div className="flex items-center gap-2">
                <span className="-mt-[2px]">Amount Processed</span> <HelpIcon />
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-[2rem]">₹23,92,312.19</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-[1.25rem] font-medium text-[ #1A181E] tracking-wide ">
          Transactions | This Month
        </h3>
        <div className="flex gap-4 my-4">
          <div className="rounded-[2.5rem] bg-[#E6E6E6] text-[#808080] px-4 py-[0.38rem] font-medium font-inter text-[0.875rem]">
            {"Payouts (22)"}
          </div>
          <div className="rounded-[2.5rem] text-white bg-[#146EB4] px-4 py-[0.38rem] font-medium font-inter text-[0.875rem]">
            {"Refunds (2)"}
          </div>
        </div>

        <div className="p-4 shadow bg-white rounded-md">
          <div className="flex justify-between gap-2 ">
            <SearchInput
              placeholder={"Order ID or transaction ID"}
              className={
                "border border-solid border-[#D9D9D9] w-[15.5rem] h-[2.5rem]"
              }
            />
            <div className="flex gap-4">
              <button className="flex items-center gap-2 border border-solid border-[#D9D9D9] rounded-md px-[0.75rem] py-[0.38rem]">
                Sort
                <SortIcon />
              </button>
              <button className="border border-solid border-[#D9D9D9] rounded-md px-[0.75rem] py-[0.38rem]">
                <DownloadTableIcon />
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto rounded-md mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-md">
              <thead className="text-xs bg-[#F2F2F2] text-gray-700  rounded-md">
                <tr className="rounded-md">
                  <th
                    scope="col"
                    className="text-[0.875rem] text-[ #4D4D4D] px-6 py-3 font-medium"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="text-[0.875rem] text-[ #4D4D4D] px-6 py-3 font-medium"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="text-[0.875rem] text-[ #4D4D4D] px-6 py-3 font-medium"
                  >
                    Transaction ID
                  </th>
                  <th
                    scope="col"
                    className="text-[0.875rem] text-[ #4D4D4D] px-6 py-3 font-medium"
                  >
                    Refund date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-[0.875rem] text-[ #4D4D4D] text-right font-medium"
                  >
                    Order amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {orderData.map((orderData, index) => (
                  <tr key={index} className="bg-white tableRowBorder">
                    <th
                      scope="row"
                      className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap"
                    >
                      {orderData.id}
                    </th>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="10"
                        viewBox="0 0 11 10"
                        fill="none"
                      >
                        <circle
                          cx="5.33594"
                          cy="5"
                          r="5"
                          fill={
                            orderData.status === "Successful"
                              ? "#17B31B"
                              : "#999999"
                          }
                        />
                      </svg>{" "}
                      <span className="-mt-[1.5px]">{orderData.status}</span>
                    </td>

                    <td className="px-6 py-4">{orderData.transaction}</td>
                    <td className="px-6 py-4">{orderData.date}</td>
                    <td className="px-6 py-4 text-right">{orderData.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
