

/*
  * columns       => Table Head Columns Names
  * columnsWidth  => Table Head Colums Styles (width, alignment)
*/

const Thead = ({ columns, columnsWidth }) => {
  return (
    <>
      <thead className="bg-[#F1F4F6]">
        <tr className="border-b border-solid border-[rgba(26,30,61,0.10)]">
          {
            columns &&
            columns?.map((th, index) => (
              <th key={index} className={`py-[4.3px] px-2.5 font-normal 
                ${columnsWidth[th]?.w ? `w-[${columnsWidth[th]?.w}]` : ''} 
                ${columnsWidth[th]?.theadAlign ? `text-${columnsWidth[th]?.theadAlign}` : 'text-center'}  
              `}>
                {th}
              </th>
            ))
          }
        </tr>
      </thead>
    </>
  )
}

export default Thead
