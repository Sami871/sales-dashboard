import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2  text-blue-400 font-bold"
      />
      <input
        type="text"
        placeholder="Search here.."
        className="
          w-full
          pl-10
          pr-4
          py-2
          rounded-lg
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
          focus:border-blue-500
          bg-gray-200
          text-gray-700
        "
      />
    </div>
  );
};

export default SearchBar;
