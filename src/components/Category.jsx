import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
export default function Category({ setFilters }) {

    const handleCategoryChange = (event) => {
      setFilters(filters => ({ ...filters, category: event.target.value }));
    };

  return (
    <div className="border border-black rounded-sm 2xl:text-2xl 2xl:p-1">
         <select onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="Acrylic">Acrylic</option>
        <option value="Mixed technique">Mixed Technique</option>
      </select>
    </div>
  )
}

