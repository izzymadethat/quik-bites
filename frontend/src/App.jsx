import { useEffect, useState } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

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
    </div>
  );
}

export default App;
