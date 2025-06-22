import React from "react";
import products from "../Products";
import NewCard from "../Cards/NewCard";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const NewHome = () => {
  // let filterValue = ""
  // const filterCart = products.filter((item)=> {
  //   filterValue
  // })
  return (
    <>
      <div>
        {/* filter  */}
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
            Sort
            <ChevronDownIcon
              aria-hidden="true"
              className="-mr-1 ml-1 size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
            />
          </Menu.Button>
          <Menu.Items className="absolute left-0 mt-2 w-40 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <button onClick={(e)=>{
                    e.preventDefault();
                    // filterValue= e.target.value;
                  }} value="gaming"className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-700'}`}>Gaming</button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-700'}`}>Audio</button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-700'}`}>Mobile</button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button className={`w-full text-left px-4 py-2 text-sm ${active ? 'bg-blue-100 text-blue-900' : 'text-gray-700'}`}>TV</button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>


        {/* Cards  */}
      </div>
      <div className="flex justify-around flex-wrap gap-8 p-4">
        {(products || []).map((prod) => (
          <NewCard key={prod.id} ObjProd={prod} />
        ))}
      </div>
    </>
  );
};

export default NewHome;
