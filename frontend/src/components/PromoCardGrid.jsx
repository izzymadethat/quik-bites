const PromoCard = ({ color, title, subtitle, action, url, bgCoverType }) => {
  if (bgCoverType !== "fixed" && bgCoverType !== "cover") {
    bgCoverType = "cover";
  }

  return (
    <div
      className={`${color} flex shadow-md rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl rounded-br-3xl`}
    >
      <div className="flex flex-col gap-4 p-5 text-white">
        <div className="max-w-lg">
          <h3 className="text-lg font-bold">{title}</h3>
          <p>{subtitle}</p>
        </div>
        <button className="p-2 text-sm text-white bg-red-500 max-w-32 rounded-3xl">
          {action}
        </button>
      </div>
      <div
        className={`w-full h-full bg-center bg-no-repeat bg-${bgCoverType} bg-[url('${url}')] rounded-tr-3xl rounded-br-3xl`}
      ></div>
    </div>
  );
};

/**
 *  2 column grid that displays top 2 promo cards
 * @returns
 */
const PromoCardGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-8 mt-16">
      <PromoCard
        title="Thirsty30: All beer 30% off for 3 orders $25+, up to $15 per order."
        subtitle="Now until the holidays end. Use code 30BEER. Terms Apply."
        color="bg-blue-500"
        action="Order beer"
        bgCoverType={"fixed"}
        url="https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <PromoCard
        action="Get now"
        color="bg-amber-500"
        title="Fall is here! Share the joy of a tasty pumpkin spice latte with
              us."
        subtitle="Get 10% off your next order when you gift a QB subscription. Terms
              Apply."
        url="https://images.unsplash.com/photo-1605116188325-4379d4f5aa2c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};
export default PromoCardGrid;
