import React from "react";
import Layout from "../components/Layout";
import HelpIcon from "../assets/NavbarIcons/HelpIcon";
import RightChevronIcon from "../assets/RightChevronIcon";
import SearchInput from "../components/SearchInput";
import SortIcon from "../assets/SortIcon";
import DownloadIcon from "../assets/DownloadIcon";
import DownChevronIcon from "../assets/DownChevronIcon";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center gap-2">
          <h3 className="text-[1.25rem] font-medium">Overview</h3>
          <button className="flex items-center gap-2 border border-solid border-[#D9D9D9] rounded-md px-[0.75rem] py-[0.38rem]">
            This Month
            <DownChevronIcon />
          </button>
        </div>
        <div className="flex flex-wrap gap-[1.25rem] mt-6 mb-8">
          <div className="min-w-[23rem] text-white bg-[#146EB4] rounded-[0.5rem]">
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
          <div className="min-w-[23rem] rounded-[0.5rem] bg-white shadow-md h-fit ">
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
          <div className="min-w-[23rem] rounded-[0.5rem] bg-white shadow-md h-fit ">
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
        <h3 className="text-[1.25rem] font-medium">
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
                <DownloadIcon />
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto rounded-md mt-4">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 rounded-md">
              <thead className="text-xs bg-[#F2F2F2] text-gray-700  rounded-md">
                <tr className="rounded-md">
                  <th scope="col" className="px-6 py-3">
                    Order ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Refund date
                  </th>
                  <th scope="col" className="px-6 py-3 text-right">
                    Order amount
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap "
                  >
                    {"#281807"}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                    </svg>{" "}
                    <span className="-mt-[1.5px]">Successful</span>
                  </td>
                  <td className="px-6 py-4">131024932984292</td>
                  <td className="px-6 py-4">Today, 08:45 PM</td>
                  <td className="px-6 py-4 text-right">₹1,125.00</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap "
                  >
                    {"#281807"}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.33594" cy="5" r="5" fill="#999999" />
                    </svg>{" "}
                    <span className="-mt-[1.5px]">Processing</span>
                  </td>
                  <td className="px-6 py-4">131024932984292</td>
                  <td className="px-6 py-4">Today, 08:45 PM</td>
                  <td className="px-6 py-4 text-right">₹1,125.00</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap "
                  >
                    {"#281807"}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                    </svg>{" "}
                    <span className="-mt-[1.5px]">Successful</span>
                  </td>
                  <td className="px-6 py-4">131024932984292</td>
                  <td className="px-6 py-4">Today, 08:45 PM</td>
                  <td className="px-6 py-4 text-right">₹1,125.00</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap "
                  >
                    {"#281807"}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                    </svg>{" "}
                    <span className="-mt-[1.5px]">Successful</span>
                  </td>
                  <td className="px-6 py-4">131024932984292</td>
                  <td className="px-6 py-4">Today, 08:45 PM</td>
                  <td className="px-6 py-4 text-right">₹1,125.00</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap "
                  >
                    {"#281807"}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                    </svg>{" "}
                    <span className="-mt-[1.5px]">Successful</span>
                  </td>
                  <td className="px-6 py-4">131024932984292</td>
                  <td className="px-6 py-4">Today, 08:45 PM</td>
                  <td className="px-6 py-4 text-right">₹1,125.00</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap "
                  >
                    {"#281807"}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                    </svg>{" "}
                    <span className="-mt-[1.5px]">Successful</span>
                  </td>
                  <td className="px-6 py-4">131024932984292</td>
                  <td className="px-6 py-4">Today, 08:45 PM</td>
                  <td className="px-6 py-4 text-right">₹1,125.00</td>
                </tr>
                <tr className="bg-white border-b ">
                  <th
                    scope="row"
                    className="px-6 text-[#146EB4] py-4 font-medium  whitespace-nowrap "
                  >
                    {"#281807"}
                  </th>
                  <td className="px-6 py-4 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="10"
                      viewBox="0 0 11 10"
                      fill="none"
                    >
                      <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                    </svg>{" "}
                    <span className="-mt-[1.5px]">Successful</span>
                  </td>
                  <td className="px-6 py-4">131024932984292</td>
                  <td className="px-6 py-4">Today, 08:45 PM</td>
                  <td className="px-6 py-4 text-right">₹1,125.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
