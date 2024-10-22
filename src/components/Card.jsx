function Card({ title, value }) {
  return (
    <div className="card">
      <p className="value">{value}</p>
      <p className="title">{title}</p>
    </div>
  );
}

export default Card;
