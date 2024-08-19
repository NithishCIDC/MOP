import React from "react";
import { FaFilter } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

const Condition: React.FC = () => {
  return (
    <div>
      <div className="d-flex align-content-center mt-3">
        <input type="text" className="border-1 px-2 feild-form" />
        <div className="bg-primary px-1 align-content-center">
          <IoSearch className="bg-primary text-white fs-4" />
        </div>

        <div className="bg-primary ms-2 p-1 px-2 align-content-center">
          <FaFilter className="bg-primary text-white fs-5" />
        </div>
      </div>
    </div>
  );
};

export default Condition;
