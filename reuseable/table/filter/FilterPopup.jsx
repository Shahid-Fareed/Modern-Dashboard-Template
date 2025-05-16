import { useState } from "react"
import Button from "../../Button"


const FilterPopup = ({ handelFilterTableRow, openFilterPopup }) => {

  const [value, setValue] = useState("");

  return (
    <>
      <div className={`shadow-[0px_0px_20px_0px_#EFF2F5] bg-white rounded-[15px] p-4 w-full max-w-[311px] space-y-2.5 
        ${openFilterPopup ? '' : 'hidden'} absolute top-[calc(100%-10px)] left-0
      `}>
        <input type="search" 
          name="filter-search" 
          placeholder="Search Title" 
          id="filter-search" 
          className="rounded-[15px] py-[9.5px] px-[21px] w-full bg-w-light-gray focus-visible:outline-none text-[#B6BEC9] text-sm font-normal leading-normal placeholder:text-sm placeholder:font-normal placeholder:leading-normal placeholder:text-[#B6BEC9]" 
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />

        <Button
          buttonTag={'button'}
          buttonClass={`bg-w-light-blue text-white rounded-[15px] p-2 block w-full text-center`} 
          onClick={handelFilterTableRow ? () => handelFilterTableRow(value)   : undefined}
        >
          Apply
        </Button>
      </div>
    </>
  )
}

export default FilterPopup
