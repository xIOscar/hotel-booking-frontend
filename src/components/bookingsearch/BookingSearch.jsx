import { IoIosBook } from "react-icons/io";
import BookingModal from "../BookingModal/BookingModal";
import React, { useEffect, useRef, useState } from "react";

const BookingSearch = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const dropdownRef = useRef(null);

  const handleDivClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    setDropdownVisible(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleButtonClick = () => {
    setModalVisible(!isModalVisible);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };


  return (
    <div className="rounded-full border-[1px] border-gray-200 flex max-w-3xl m-auto shadow-md my-10 relative">
      <div
        className="flex flex-col rounded-full pl-8 py-3 hover:bg-gray-200 w-full cursor-pointer z-10"
        onClick={handleDivClick}
      >
        <label className="text-sm font-bold text-gray-500" htmlFor="search ">
          Location
        </label>
        <input
          id="search"
          type="text"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          readOnly
          placeholder="Search..."
          value={selectedValue}
        />
      </div>
      {isDropdownVisible && (
        <div
          ref={dropdownRef}
          className="bg-white w-[400px] p-8 absolute bottom-[-225px] left-1  shadow-2xl border-[1px] border-gray-200 rounded-lg text-sm"
        >
          <h1 className="font-bold mb-4">Select an Hotel</h1>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              id="hotelplaza"
              value="Hotel Plaza"
              checked={selectedValue === "Hotel Plaza"}
              onChange={handleRadioChange}
            />
            <label htmlFor="hotelplaza">Hotel Plaza</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              id="hotelriviera"
              value="Hotel Riviera"
              checked={selectedValue === "Hotel Riviera"}
              onChange={handleRadioChange}
            />
            <label htmlFor="hotelriviera">Hotel Riviera</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              id="hotelsol"
              value="Hotel Sol"
              checked={selectedValue === "Hotel Sol"}
              onChange={handleRadioChange}
            />
            <label htmlFor="hotelsol">Hotel Sol</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="radio"
              id="hotelmar"
              value="Hotel Mar"
              checked={selectedValue === "Hotel Mar"}
              onChange={handleRadioChange}
            />
            <label htmlFor="hotelmar">Hotel Mar</label>
          </div>
        </div>
      )}
      <div className="flex flex-col rounded-full px-4 py-3 hover:bg-gray-200 w-full cursor-pointer">
        <label className="text-sm font-bold text-gray-500" htmlFor="checkin">
          Check in
        </label>
        <input
          id="checkin"
          type="date"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          placeholder="Date..."
        />
      </div>
      <div className="flex flex-col rounded-full px-4 py-3 hover:bg-gray-200 w-full cursor-pointer">
        <label className="text-sm font-bold text-gray-500" htmlFor="checkout">
          Check out
        </label>
        <input
          id="checkout"
          type="date"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          placeholder="Date..."
        />
      </div>
      <div className="flex flex-col rounded-full px-4 py-3 hover:bg-gray-200 w-full relative cursor-pointer ">
        <label className="text-sm font-bold text-gray-500" htmlFor="guests">
          Guests
        </label>
        <input
          id="guests"
          type="text"
          className="text-sm bg-transparent focus:outline-none focus:ring-0"
          placeholder="How many?"
        />
        <button
          onClick={handleButtonClick}
          className="absolute rounded-full right-4 top-2 bg-red-500 hover:bg-red-600 active:bg-red-800 w-[50px] h-[50px]"
        >
          <IoIosBook className="text-white m-auto text-2xl" />
        </button>
      </div>
      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-10">
          <BookingModal  onClose={handleCloseModal} />
        </div>
      )}
    </div>
  );
};
export default BookingSearch;
