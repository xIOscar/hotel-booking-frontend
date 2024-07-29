const HotelCards = ({ image, name, location, price }) => {
  return (
    <div>
      <div className="hotel-card">
        <img className="w-full h-[200px] object-cover rounded-md" src={image} alt={`${name} image`} />
        <h2 className="font-bold mt-2">{name}</h2>
        <p className=" text-gray-400">{location}</p>
        <p> {price}</p>
      </div>
    </div>
  );
};
export default HotelCards;
