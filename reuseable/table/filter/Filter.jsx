
import { useState } from "react"
import { Link } from "react-router-dom"

import FilterPopup from "./FilterPopup"


/* 
  * columns           => Filter are defined based on Columns
  * skipColumnItems   => Columns items which should be Ignore for Filter
  * handelFilterTableRow    => Function is used for Filter Rows of Table
*/

const Filter = ({ columns, skipColumnItems, handelFilterTableRow }) => {

  const [openFilterPopup, setOpenFilterPopup] = useState(false);
  const [activeFilterTab, setActiveFilterTab] = useState(null);

  return (
    <>
      {
        columns && (
          <div className="relative">
            <ul className="space-x-[5px] flex flexw-wrap py-[13px]">
              {
                columns?.map((tag, index) => (
                  (
                    !skipColumnItems.includes(tag) && (
                      <li key={index}>
                        <Link 
                          className={`flex flex-wrap items-center space-x-[5px] px-2.5 py-[5px] rounded-[15px] border border-solid text-sm font-noramal leading-normal
                            ${activeFilterTab == index ? 'border-[#8AA2C8] bg-[#A5B8D4] text-white' : 'border-[#FBFBFB] hover:border-[#A6B0BE] hover:border-dotted bg-[#FBFBFB] text-[#A6B0BE]'}
                          `}
                          onClick={() => {
                            setOpenFilterPopup(!openFilterPopup);
                            activeFilterTab == index ? setActiveFilterTab(null) : setActiveFilterTab(index);
                          }}
                        >
                          <span className="inline-block">
                            <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
                              <path d="M6 12C2.68235 12 0 9.31765 0 6C0 2.68235 2.68235 0 6 0C9.31765 0 12 2.68235 12 6C12 9.31765 9.31765 12 6 12ZM6 0.705882C3.07059 0.705882 0.705882 3.07059 0.705882 6C0.705882 8.92941 3.07059 11.2941 6 11.2941C8.92941 11.2941 11.2941 8.92941 11.2941 6C11.2941 3.07059 8.92941 0.705882 6 0.705882Z" 
                                fill={activeFilterTab == null ? "#A6B0BE" : '#fff'} 
                              />
                              <path d="M2.82373 5.64706H9.17667V6.35295H2.82373V5.64706Z" fill={activeFilterTab == null ? "#A6B0BE" : '#fff'} />
                              <path d="M5.64697 2.82353H6.35286V9.17647H5.64697V2.82353Z" fill={activeFilterTab == null ? "#A6B0BE" : '#fff'} />
                            </svg>
                          </span>

                          <span>{tag}</span>
                        </Link>
                      </li>
                    )
                  )
                ))
              }
            </ul>

            <FilterPopup handelFilterTableRow={handelFilterTableRow} openFilterPopup={openFilterPopup} />
          </div>
        )
      }
    </>
  )
}

export default Filter
