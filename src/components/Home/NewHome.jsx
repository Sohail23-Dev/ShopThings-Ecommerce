import React from "react";
import products from "../Products";
import NewCard from "../Cards/NewCard";
import { useSelector } from "react-redux";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { setCategory } from "../../features/filterSlice";
// import products from "../Products";
import { useDispatch } from "react-redux";

const NewHome = () => {
  const categories = [
    "all",
    ...Array.from(new Set(products.map((product) => product.category))),
  ];

  const handleCategoryFilter = (category) => {
    dispatch(setCategory(category));
  };

  const dispatch = useDispatch();
  // Get selected category from Redux
  const selectedCategory = useSelector((state) => state.filter.category);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Menu as="div" className="relative left-[91vw] top-3 inline-block text-left">
        <Menu.Button className="group inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-1 text-base font-semibold text-gray-700 shadow-sm hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150">
          <FilterAltIcon className="!text-blue-600 !w-5 !h-5" />
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 ml-1 w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors"
          />
        </Menu.Button>
        <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {categories.map((category) => (
              <Menu.Item key={category}>
                {({ active }) => (
                  <button
                    onClick={() => handleCategoryFilter(category)}
                    className={`w-full text-left px-4 py-2 text-sm ${
                      active ? "bg-blue-100 text-blue-900" : "text-gray-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Menu>

      <div className="flex justify-around flex-wrap gap-8 p-4">
        {(filteredProducts || []).map((prod) => (
          <NewCard key={prod.id} ObjProd={prod} />
        ))}
      </div>
    </>
  );
};

export default NewHome;
