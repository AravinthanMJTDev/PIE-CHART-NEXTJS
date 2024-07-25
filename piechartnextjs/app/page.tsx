"use client";
import PieChart from "./piechart";
import { useState } from "react";
import HighchartsChart from "./highchartsChart";
export default function Home() {
  const [open, setOpen] = useState(false);
  const date = new Date();

  return (
    <div className="flex flex-row justify-around items-center bg-black">
      <div className="flex flex-col  items-center bg-white border w-[800px] h-[600px] rounded-[25px]">
        <div className="flex flex-row justify-between  bg-white w-[80%]  mb-5">
          <div className="flex flex-col">
            <label className="font-black">Machine Status Pie </label>
            <p className="flex flex-col">
              Last Updated:{" "}
              {date.toDateString() + " " + date.toLocaleTimeString()}
              <span>
                Source:
                <a href="http://mjtechsolutions.in" target="_blank">
                  mjtechsolution
                </a>
              </span>
            </p>
          </div>

          <div className=" flex flex-row items-center justify-center gap-3">
            <div>
              <select className="border border-s-black-50" defaultValue="Today">
                <option value="">Today</option>
                <option value="">Yesterday</option>
                <option value="">Last Week</option>
              </select>
            </div>
            <div
              className=" flex flex-col  relative justify-between rounded-md focus:outline-none hover:cursor-pointer gap-0.5"
              onClick={() => setOpen(!open)}
            >
              <div className="w-[20px] h-[4px] bg-black rounded-lg"></div>
              <div className="w-[20px] h-[4px] bg-black rounded-lg"></div>
              <div className="w-[20px] h-[4px] bg-black rounded-lg"></div>

              {open && (
                <div className="absolute  mt-5 ml-[-180px] w-48 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
        <HighchartsChart />
      </div>
    </div>
  );
}
