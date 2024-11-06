import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import PromoCardGrid from "./components/PromoCardGrid";
import RestaurantCard from "./components/RestaurantCard";

function App() {
  const [getBack, setGetBack] = useState("");

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      if (data) {
        setGetBack(data.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="container mx-auto">
      <Header />
      <Banner />
      <PromoCardGrid />
      <section className="my-10 space-y-2">
        <h2 className="text-lg font-bold">Restaurants (Will be categorized)</h2>
        <section className="grid grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((rest, i) => (
            <RestaurantCard
              key={i}
              title={`Restaurant ${i + 1}`}
              rating={4.2}
              deliveryFee={0}
              fastestTime={35}
              imgUrl={`https://placehold.co/400x300?text=Restaurant+${i}`}
            />
          ))}
        </section>
      </section>
    </div>
  );
}

export default App;
