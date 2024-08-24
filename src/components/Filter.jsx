import React, { useContext, useEffect, useRef, useState } from "react";
import { RecordContext } from "../RecordsContext";

const Filter = () => {
  const { filterType, setFilterType } = useContext(RecordContext);
  const [activeFilter, setActiveFilter] = useState("All");
  const [toggleModal, settoggleModal] = useState(false);
  const modalRef = useRef();

  function handleFilter(filtervalue) {
    setFilterType(filtervalue);
    setActiveFilter(filtervalue);
    settoggleModal(false);
  }
  return (
    <>
      <div className="filter relative top-full">
        <button
          onClick={() => {
            settoggleModal(!toggleModal);
          }}
          className="flex gap-2 items-center border py-2 rounded-lg px-6 text-gray-400 text-lg hover:border-purple-300 hover:shadow-md "
        >
          {activeFilter.charAt(0).toUpperCase() + activeFilter.slice(1)}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className={`mt-1 transition-all duration-300 ${
                toggleModal ? "rotate-180" : ""
              }`}
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </span>
        </button>
        {toggleModal ? (
          <div
            ref={modalRef}
            className="filter-modal w-[120px] py- bg-gray-100 rounded-lg absolute mt-2 shadow-lg"
          >
            <button
              onClick={() => {
                handleFilter("all");
              }}
              className="w-[100%] px-4 py-2 text-gray-600 text-lg hover:bg-violet-500 hover:text-white cursor-pointer"
            >
              All
            </button>
            <button
              onClick={() => {
                handleFilter("expense");
              }}
              className="w-[100%] px-4 py-2 text-lg text-gray-600 hover:bg-violet-500 hover:text-white cursor-pointer "
            >
              Expense
            </button>
            <button
              onClick={() => {
                handleFilter("income");
              }}
              className="w-[100%] px-4 py-2 text-lg text-gray-600 hover:bg-violet-500 hover:text-white cursor-pointer"
            >
              Income
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Filter;
