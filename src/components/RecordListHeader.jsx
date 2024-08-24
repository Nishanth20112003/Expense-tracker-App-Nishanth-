import React from "react";
import SearchBar from "./SearchBar";
import TotalExpenseAndIncome from "./TotalExpenseAndIncome";
import Filter from "./Filter";
import Sort from "./Sort";

const RecordListHeader = ({ toggleForm }) => {
  return (
    <>
      {toggleForm ? (
        ""
      ) : (
        <div className="header bg-white px-3 pb-4 py-3  flex gap-1 items-center justify-between fixed w-[88.9%] rounded-tl-lg rounded-tr-lg">
          <SearchBar />
          <div className="flex gap-2">
            <TotalExpenseAndIncome />
            <Filter />
            <Sort />
          </div>
        </div>
      )}
    </>
  );
};

export default RecordListHeader;
