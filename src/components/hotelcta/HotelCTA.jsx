import HotelCard from "../hotelcards/HotelCards";

const HotelCTA = () => {
  const hotels = [
    {
      id: 1,
      name: "Hotel Plaza",
      location: "Madrid",
      price: "$100.00",
      rating: 4.5,
      image: "../src/img/hotel4.jpg",
    },
    {
      id: 2,
      name: "Hotel Riviera",
      location: "Barcelona",
      price: "$100.00",
      rating: 4.7,
      image: "../src/img/hotel3.jpg",
    },
    {
      id: 3,
      name: "Hotel Sol",
      location: "Sevilla",
      price: "$100.00",
      rating: 4.3,
      image: "../src/img/hotel2.jpg",
    },
    {
      id: 4,
      name: "Hotel Mar",
      location: "Valencia",
      price: "$100.00",
      rating: 4.6,
      image: "../src/img/hotel1.jpg",
    },
  ];
  return (
    <div className="max-w-[1240px] m-auto">
      <div className="grid grid-cols-4 gap-5">
        {hotels.map((hotel) => (
          <HotelCard key={hotel.id} {...hotel} />
        ))}
      </div>
    </div>
  );
};
export default HotelCTA;
