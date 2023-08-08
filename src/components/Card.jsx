export default function Card(props) {
  return (
    // <div className="card">
    <div className={props.hide ? "card fadeout" : "card fadein"}>
      <img src={props.img} alt="Image Not Found"/>
      <div className="dim">
        <h3>{props.city}</h3>
        <p>{props.country}</p>
      </div>
    </div>
  );
}