
import { Link } from "react-router-dom"
import _ from "lodash";

/*
  * itemCount      => Total Posts
  * pageSize       => Limit Of Posts that should be Display in one Page
  * onPageChange   => Change Page
  * currentPage    => Active Page
*/

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {

  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount === 1) return null;

  const pages = _.range(1, pageCount + 1);
  const lastPage = pages.slice(-1)[0];

  const handleAdd = (e) => {
    const add = currentPage + 1;
    onPageChange(e, add);
  };
  const handleSuntract = (e) => {
    const subtract = currentPage - 1;
    onPageChange(e, subtract);
  };

  console.log(currentPage, lastPage)

  return (
    <>
      <ul className="space-x-2.5 text-xs leading-3 font-normal flex">
        <li className={`${currentPage <= 1 ? "page-item disabled" : "page-item"} rounded-xl bg-[#F7F7F7] py-1.5 px-2`} >
          <Link to="#" 
            disabled={currentPage <= 1 ? true : false}
            onClick={currentPage > 1 ? (e) => handleSuntract(e) : undefined}
          >
            Previous
          </Link>
        </li>
        <li className="rounded-xl bg-transparent py-1.5 px-2 page-item border border-solid border-[#6CA7FF] text-blak"
        >
          <Link to="#" className="page-link">
            {currentPage}
          </Link>
        </li>
        <li className={`${currentPage >= lastPage ? "page-item disabled" : "page-item"} rounded-xl bg-[#F7F7F7] py-1.5 px-2`}>
          <Link to="#" 
            disabled={currentPage >= lastPage ? true : false}
            className="page-link"
            onClick={currentPage < lastPage ? (e) => handleAdd(e) : undefined}
          >
            Next
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Pagination
