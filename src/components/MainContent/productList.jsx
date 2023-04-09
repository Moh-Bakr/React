import Navbar from "../Layout/Navbar.jsx";
import React from "react";

function productList() {
  return (

    <div className="p-4 px-36">

      <div className="p-5 px-10 border-2 border-dashed rounded-lg border-gray-700 min-h-[100vh] max-h-full">

        <div className="grid gap-8 grid-cols-1 lg:grid-cols-4 lg:gap-10">
          <div className="bg-gray-800 py-4 overflow-hidden flex rounded bg-gray-800 rounded-xl">

            <input className="w-4 h-4 ml-4 lg:mr-8" id="default-checkbox" type="checkbox" value=""/>

            <div className="sm:ml-[30%] lg:ml-[20%]">
              <p className="text-xl text-white">one</p>
              <p className="text-xl text-white">one</p>
              <p className="text-xl text-white">one</p>
              <p className="text-xl text-white">one</p>
              <p className="text-xl text-white">one</p>

            </div>
          </div>


        </div>

      </div>


    </div>
  );
}

export default productList;