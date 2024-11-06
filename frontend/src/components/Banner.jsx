const Banner = () => {
  return (
    <div className="relative mt-8 shadow-lg h-96 rounded-3xl">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450152021501-598b36b17449?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat rounded-3xl"></div>
      <div className="absolute inset-0 opacity-80 md:opacity-40 bg-gradient-to-tr from-red-600 to-purple-900/50 rounded-3xl blur-sm"></div>

      <div className="relative z-10 flex flex-col w-full p-8 mr-8 text-center md:justify-start md:items-end">
        <div className="flex flex-col items-center justify-center text-right md:items-end">
          <h1 className="font-bold text-black md:mb-2 md:text-white text-7xl md:text-8xl">
            Full Stacked
          </h1>
          <h2 className="font-extrabold text-white uppercase up text-7xl md:text-red-600 md:text-6xl">
            Half Priced
          </h2>
        </div>
        <div className="self-center max-w-sm mt-4 md:self-end md:text-right">
          <p className="text-xl text-white">
            Get 50% Off on waffles and pancakes at a random store that sells
            waffles and/or pancakes.*
          </p>
          <p className="my-2 text-xs">
            * Terms and Conditions apply. Offer valid only at participating
            locations.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Banner;
