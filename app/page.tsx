"use client";
// import PieChart from "./piechart";
import { useState, useEffect, useRef } from "react";
import HighchartsChart from "./highchartsChart";
import { RefreshCw, ScanSearch } from "lucide-react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [hover, setHover] = useState(false);
  const containerRef = useRef(null);
  console.log("outside");
  useEffect(() => {
    const date = new Date();
    setFormattedDate(date.toDateString() + "  " + date.toLocaleTimeString());
  }, []);

  useEffect(() => {
    console.log("han");
    const handleClickOutside = (event: MouseEvent) => {
      console.log("handlesd");
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setHover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-80 flex flex-row justify-around items-center  mx-auto overflow-hidden  border  rounded-xl bg-white transition-transform duration-300 ease-in-out"
      onClick={() => {
        setHover(!hover);
      }}
      style={{
        transform: `scale(${hover ? 1 : 0.5})`,
      }}
    >
      <div className="flex flex-col  items-center border w-full h-full  relative bg-inherit">
        <div
          className="flex flex-row justify-between w-full px-10 pt-3"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <label className="font-serif-Times-New-Roman">
            Machine Status Pie{" "}
          </label>
          <div className=" flex flex-row items-center justify-center gap-3">
            <div>
              <select className="border border-s-black-50" defaultValue="Today">
                <option value="">Today</option>
                <option value="">Yesterday</option>
                <option value="">Last Week</option>
              </select>
            </div>
            <div>
              <RefreshCw />
            </div>
            <div
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                setHover(!hover);
              }}
            >
              <ScanSearch />
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
        <div className="flex flex-row w-full justify-start ml-20">
          <div className="flex flex-col">
            <p className="flex flex-col font-sans">
              Last Updated: {formattedDate}
              <span>
                Source:
                <a href="http://mjtechsolutions.in" target="_blank">
                  mjtechsolution
                </a>
              </span>
            </p>
          </div>
        </div>
        <div
          className="w-full h-full"
          onClick={(e: React.MouseEvent) => e.stopPropagation()}
        >
          <HighchartsChart />
        </div>
      </div>
    </div>
  );
}
