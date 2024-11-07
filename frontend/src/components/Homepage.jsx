import { restaurants } from "../constants";
import Banner from "./Banner";
import Header from "./Header";
import PromoCardGrid from "./PromoCardGrid";
import RestaurantCard from "./RestaurantCard";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <PromoCardGrid />
      <section className="my-10 space-y-2">
        <h2 className="text-lg font-bold">Restaurants (Will be categorized)</h2>

        <section className="grid grid-cols-4 gap-8 my-8">
          {restaurants.map((rest) => (
            <RestaurantCard
              key={rest.id}
              title={rest.title}
              rating={rest.rating}
              deliveryFee={rest.deliveryFee}
              fastestTime={rest.fastestTime}
              imgUrl={rest.imgUrl}
            />
          ))}
        </section>
      </section>
    </div>
  );
};
export default Homepage;
