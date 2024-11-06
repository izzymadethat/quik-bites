import { GoDotFill } from "react-icons/go";
const RestaurantCard = ({
  imgUrl,
  title,
  rating,
  deliveryFee,
  fastestTime
}) => {
  return (
    <article className="space-y-1 cursor-pointer">
      <div className="rounded-3xl">
        <img src={imgUrl} alt="" className="rounded-xl" />
      </div>
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{title}</h3>
        <div className="flex gap-4 p-1 text-xs bg-gray-300 rounded-full w-fit h-fit">
          {rating.toFixed(1)}
        </div>
      </div>
      <div className="flex items-center gap-1 text-xs">
        <span className="font-bold text-red-500">
          ${deliveryFee || 0} Delivery Fee
        </span>

        <GoDotFill size={4} />

        <span>{fastestTime} min</span>
      </div>
    </article>
  );
};
export default RestaurantCard;
