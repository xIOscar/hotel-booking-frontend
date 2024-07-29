import { MdOutlineSearch } from "react-icons/md";

const BookingSearch = () => {
  return (
    <div className="rounded-full border-[1px] border-gray-200 flex max-w-3xl m-auto shadow-md overflow-hidden my-10">
      <div className="flex flex-col pl-8 py-3 hover:bg-gray-200 w-full cursor-pointer">
        <label className="text-sm font-bold text-gray-500" htmlFor="search">
          Location
        </label>
        <input
          id="search"
          type="text"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          placeholder="Search..."
        />
      </div>
      <div className="flex flex-col px-2 py-3 hover:bg-gray-200 w-full cursor-pointer">
        <label className="text-sm font-bold text-gray-500" htmlFor="search">
          Check in
        </label>
        <input
          id="search"
          type="text"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          placeholder="Date..."
        />
      </div>
      <div className="flex flex-col px-2 py-3 hover:bg-gray-200 w-full cursor-pointer">
        <label className="text-sm font-bold text-gray-500" htmlFor="search">
          Check out
        </label>
        <input
          id="search"
          type="text"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          placeholder="Date..."
        />
      </div>
      <div className="flex flex-col px-2 py-3 hover:bg-gray-200 w-full relative cursor-pointer">
        <label className="text-sm font-bold text-gray-500" htmlFor="search">
          Guests
        </label>
        <input
          id="search"
          type="text"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          placeholder="How many?"
        />
        <button className="absolute rounded-full right-4 top-2 bg-red-500 hover:bg-red-600 w-[50px] h-[50px]">
          <MdOutlineSearch className="text-white m-auto text-2xl" />
        </button>
      </div>
    </div>
  );
};
export default BookingSearch;
