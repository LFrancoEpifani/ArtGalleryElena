import React from "react";
import { useId } from "react";


export default function Category({ setFilters }) {

    const handleCategoryChange = (event) => {
      setFilters(filters => ({ ...filters, category: event.target.value }));
    };
    const categoryFilterId = useId()

  return (
    <div className="border border-black rounded-sm 2xl:text-2xl 2xl:p-1">
        <select id={categoryFilterId} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Acrylic">Acrylic</option>
        <option value="Mixed technique">Mixed Technique</option>
      </select>
    </div>

  )
}

