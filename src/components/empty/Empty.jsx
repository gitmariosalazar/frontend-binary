import React from "react";
import { ImFileEmpty } from "react-icons/im";
import { menuicons } from "../../assets/assets";

const Empty = ({ title }) => {
  return (
    <div className="h-16 w-full flex justify-center items-start mr-4">
      <div className="flex justify-center items-center p-2">
        <img
          src={menuicons.binary_code}
          className="text-4xl text-gray-400 m-auto my-2 icon-menu-empty"
        />
        <h1 className="font-bold text-xl ml-3 text-sky-500">{title}</h1>
      </div>
    </div>
  );
};

export default Empty;
