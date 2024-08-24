import React, { useContext, useState } from "react";
import { RecordContext } from "../RecordsContext";

const Header = () => {
  const { toggleForm, setToggleForm } = useContext(RecordContext);
  return (
    <>
      <div className="header flex gap-1 items-center justify-between mt-2">
      <h1 className="font-semibold text-2xl">Financial Overview</h1>
      <button onClick={()=>{setToggleForm(true)}} className="w-[fit-content] px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-lg rounded-full">
        Add Transaction
      </button>
      </div>
    </>
  );
};
  
export default Header;
