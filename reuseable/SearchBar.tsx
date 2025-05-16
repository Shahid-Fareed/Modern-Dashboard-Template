// components/SearchBar.tsx

import { IoIosSearch } from "react-icons/io";
import { ChangeEvent, FormEvent, useState } from "react";
import { SSG_FALLBACK_EXPORT_ERROR } from "@/node_modules/next/dist/lib/constants";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // You can perform any search-related logic here using the searchTerm state
    console.log("Search Term:", searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="p-2.5 space-x-2.5 rounded-[10px] bg-[#F9FAFB] flex items-center w-full max-w-[320px]">
      <button type="submit" className="text-[#BEBEBE]">
        <IoIosSearch />
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        name="search"
        placeholder="Search..."
        className="text-[15px] text-[#BEBEBE] font-normal leading-3 placeholder:text-[15px] placeholder:text-[#BEBEBE] placeholder:font-normal placeholder:leading-3 bg-transparent focus-visible:outline-0"
      />
    </form>
  );
};

export default SearchBar;

