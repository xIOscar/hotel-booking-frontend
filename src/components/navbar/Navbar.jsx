import BookingModal from "../BookingModal/BookingModal";
import BookingSearch from "../bookingsearch/BookingSearch";

const Navbar = () => {
  return (
    <div className="max-w-[1240px] m-auto py-10 px-5 md:px-0">
      <div className="flex justify-between items-center">
        <h1 className="uppercase font-bold text-gray-500">What hotel?</h1>
        <nav className="flex gap-4 uppercase tracking-wider ">
          <a href="">Booking</a>
        </nav>
      </div>
      <div>
        <BookingSearch />
      </div>
     
    </div>
  );
};
export default Navbar;
