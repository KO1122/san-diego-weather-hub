import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import List from "./components/List";

const API_KEY = "3a0dab825da64786a4d7e9b46e9b91ec";

function celToFah(celcius) {
  return Math.round((celcius * 9) / 5 + 32);
}

function App() {
  const [data, setData] = useState({});
  const curDate = new Date().toISOString().split("T", 1)[0];

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.weatherbit.io/v2.0/forecast/daily?key=${API_KEY}&city=San+Diego,CA&country=US`;
      const res = await fetch(url);
      const json = await res.json(res);
      setData(json);
      console.log(json);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Weather</h1>
      <div className="card-container">
        <Card title="Location" value="San Diego, USA" />
        <Card title="Date" value={curDate} />
        <Card
          title="Temperature"
          value={`${
            Object.keys(data).length !== 0 ? celToFah(data.data[0].temp) : ""
          }°F`}
        />
      </div>
      <List data={data} celToFah={celToFah} />
    </div>
  );
}

export default App;
