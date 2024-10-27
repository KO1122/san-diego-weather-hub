import { useState, useEffect } from "react";

function List({ data, celToFah }) {
  const [searchInput, setSearchInput] = useState("");
  const [minTempInput, setMinTempInput] = useState("");
  const [maxTempInput, setMaxTempInput] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setFilteredData(data.data);
  }, [data]);

  function handleSearchButton() {
    let tmpData = data.data;
    if (searchInput !== "") {
      tmpData = tmpData.filter((day) => day.datetime === searchInput.trim());
    }
    if (
      minTempInput !== "" &&
      maxTempInput !== "" &&
      +minTempInput <= +maxTempInput
    ) {
      tmpData = tmpData.filter(
        (day) => +minTempInput <= +day.temp && +day.temp <= +maxTempInput
      );
    }
    setFilteredData(tmpData);
  }

  return (
    <div className="list-container">
      <p>Filter by:</p>
      <div className="inputs">
        <input
          type="text"
          placeholder="Date"
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Cur Temp"
          onChange={(e) => setMinTempInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Cur Temp"
          onChange={(e) => setMaxTempInput(e.target.value)}
        />
      </div>
      <button onClick={handleSearchButton}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Current Temperature</th>
            <th>Min Temperature</th>
            <th>Max Temperature</th>
            <th>Weather Description</th>
          </tr>
        </thead>
        <tbody>
          {filteredData &&
            filteredData.length > 0 &&
            filteredData.map((day, i) => {
              return (
                <tr key={i}>
                  <td>{day.datetime}</td>
                  <td>{celToFah(day.temp)}°F</td>
                  <td>{celToFah(day.min_temp)}°F</td>
                  <td>{celToFah(day.max_temp)}°F</td>
                  <td>{day.weather.description}</td>
                </tr>
              );
            })}
          {filteredData && filteredData.length == 0 && "No Data"}
        </tbody>
      </table>
    </div>
  );
}

export default List;
