const BookingModal = ({onClose}) => {
  return (
    <div className="bg-white w-[500px] fixed top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] p-8 shadow-lg rounded-lg z-20">
      <h1 className="text-xl font-bold">Booking</h1>
      <p className="text-sm mb-4">Please, complete your personal information</p>
      <div className="grid grid-cols-4 gap-2">
        <div className="text-sm col-span-4">
          <label className="font-semibold text-gray-600" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full border-[1px] p-2 border-gray-200 rounded-lg mt-1 mb-3"
            placeholder="John Doe"
            type="text"
          />
        </div>

        <div className="text-sm col-span-2">
          <label
            className="font-semibold text-gray-600 text-sm"
            htmlFor="phone"
          >
            Phone number
          </label>
          <input
            id="name"
            className="w-full border-[1px] p-2 border-gray-200 rounded-lg mt-1 mb-3"
            placeholder="12345678"
            type="text"
          />
        </div>
        <div className="text-sm col-span-2">
          <label
            className="font-semibold text-gray-600 text-sm"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            className="w-full border-[1px] p-2 border-gray-200 rounded-lg mt-1 mb-3"
            placeholder="example@gmail.com"
            type="email"
          />
        </div>
        <div className="text-sm col-span-4">
          <label
            className="font-semibold text-gray-600 text-sm"
            htmlFor="location"
          >
            Location
          </label>
          <input
            id="location"
            className="w-full border-[1px] p-2 border-gray-200 rounded-lg mt-1 mb-3"
            placeholder="Hotel"
            type="text"
          />
        </div>
        <div className="text-sm col-span-2">
          <label
            className="font-semibold text-gray-600 text-sm"
            htmlFor="checkin"
          >
            Check in
          </label>
          <input
            id="checkin"
            className="w-full border-[1px] p-2 border-gray-200 rounded-lg mt-1 mb-3"
            placeholder="Hotel"
            type="date"
          />
        </div>
        <div className="text-sm col-span-2">
          <label
            className="font-semibold text-gray-600 text-sm"
            htmlFor="checkout"
          >
            Check out
          </label>
          <input
            id="checkout"
            className="w-full border-[1px] p-2 border-gray-200 rounded-lg mt-1 mb-3"
            placeholder="Hotel"
            type="date"
          />
        </div>
        <div className="text-sm col-span-4">
          <label
            className="font-semibold text-gray-600 text-sm"
            htmlFor="guests"
          >
            Guests
          </label>
          <input
            id="guests"
            className="w-full border-[1px] p-2 border-gray-200 rounded-lg mt-1 mb-3"
            placeholder="How many?"
            type="text"
          />
        </div>
      </div>
      <div className="flex justify-end gap-2">
        <button onClick={onClose} className="mt-4 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 rounded-lg px-5 py-2 text-sm text-white">
          Back
        </button>
        <button className="mt-4  bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-lg px-5 py-2 text-sm text-white">
          Send
        </button>
      </div>
    </div>
  );
};
export default BookingModal;
