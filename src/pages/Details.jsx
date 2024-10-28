import { Link, useParams } from "react-router-dom";

function Details({ data }) {
  const { date } = useParams();
  if (Object.keys(data).length === 0) return;
  const dayData = data.data.find((day) => day.datetime === date);

  return (
    <div className="container">
      <div className="detail-list">
        <p>Details</p>
        <p>Date: {date}</p>
        <p>Current Temperature: {dayData.temp}</p>
        <p>Min Temperature: {dayData.min_temp}</p>
        <p>Max Temperature: {dayData.max_temp}</p>
        <p>Description: {dayData.weather.description}</p>
      </div>
      <Link to="/" className="link-btn">
        Home
      </Link>
    </div>
  );
}

export default Details;
