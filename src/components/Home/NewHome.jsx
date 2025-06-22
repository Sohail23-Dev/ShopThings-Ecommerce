import React from "react";
import products from "../Products";
import NewCard from "../Cards/NewCard";
import { useSelector } from "react-redux";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const NewHome = () => {
  // Get selected category from Redux
  const selectedCategory = useSelector((state) => state.filter.category);

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <>
      <div className="flex justify-around flex-wrap gap-8 p-4">
        {(filteredProducts || []).map((prod) => (
          <NewCard key={prod.id} ObjProd={prod} />
        ))}
      </div>
    </>
  );
};

export default NewHome;
