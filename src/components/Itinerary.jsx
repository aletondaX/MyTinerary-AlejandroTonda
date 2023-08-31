import { useEffect, useState } from "react";

export default function Itinerary(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("cities.json");
      const response = await fetch("http://localhost:4000/api/itineraries/" + props.id);
      const json = await response.json();
      // console.log(json.response);
      setData(json.response)
    };
    fetchData().catch(console.error);
  }, []);

  const renderPrice = () => {
    let price = [];
    for (let i = 0; i < data.price; i++) {
      price.push(<img className="dollar" src="/dollar.png" draggable="false"></img>);      
    }
    return price;
  }

  return (
    <div className="itinerary">
      <div className="hashtags">
      {data.hashtags !== undefined ?
      data.hashtags.map(each => {
        return <p className="hash">#{each}</p>
      }) : <></>}
      </div>
      <div className="iti-flex">
        <div>
          <p>Price:</p>
          {renderPrice()}
        </div>
        <div className="author-info">
          <img src={data.photo} alt="Author photo" draggable="false"/>
          <p>{data.author}</p>
        </div>
        <div>
          <p>Duration:</p>
          <p>{data.duration} hours</p>
        </div>
      </div>
      <h3>View More</h3>
    </div>
  );
}