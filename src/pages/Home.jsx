import { useEffect, useState } from "react";
import "../App.css";
import Card from "../components/Card";
import List from "../components/List";
import MinTempChart from "../components/MinTempChart";
import MaxTempChart from "../components/MaxTempChart";

function celToFah(celcius) {
  return Math.round((celcius * 9) / 5 + 32);
}

function Home({ data }) {
  if (Object.keys(data).length === 0) return;
  if (data.status_code === 429) return;
  console.log(data);
  const curDate = new Date().toISOString().split("T", 1)[0];
  const avgMinTemp =
    data.data.reduce((acc, obj) => acc + obj.min_temp, 0) / data.data.length;
  const avgMaxTemp =
    data.data.reduce((acc, obj) => acc + obj.max_temp, 0) / data.data.length;
  const percentInc =
    Math.round(((avgMaxTemp - avgMinTemp) / avgMinTemp) * 100 * 100) / 100;

  return (
    <div className="container">
      <h1>Weather</h1>
      <div className="card-container">
        <Card title="Location" value="San Diego, USA" />
        <Card title="Date" value={curDate} />
        <Card title="Temperature" value={`${celToFah(data.data[0].temp)}°F`} />
      </div>
      <List data={data} celToFah={celToFah} />
      <div className="chart-container">
        <MinTempChart data={data} />
        <MaxTempChart data={data} />
      </div>
      <p className="interesting-fact">
        Interesting Fact: The average max temperature is {percentInc}% greater
        than the average min temperature
      </p>
    </div>
  );
}

export default Home;
