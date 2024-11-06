import { useEffect, useState } from "react";
import Header from "./components/Header";

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
      {/* Header and Navbar */}
      <Header />
      <div>
        <h1>Does this still work?</h1>
        <p>{getBack}</p>
      </div>
    </div>
  );
}

export default App;
