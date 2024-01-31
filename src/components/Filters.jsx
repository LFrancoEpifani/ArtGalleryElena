import React from 'react'

export default function Filters() {
  return (
    <div>
        <button className="flex items-center gap-1  lg:border  lg:border-black lg:w-56 lg:h-8 lg:m-2 lg:p-2 rounded-full">
            {t("filter")}
              <Icon icon="fluent:filter-12-regular" />
            </button>
    </div>
  )
}

