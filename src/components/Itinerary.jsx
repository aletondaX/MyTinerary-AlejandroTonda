import { useEffect, useState } from "react";

export default function Itinerary(props) {
  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
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
      price.push(<img className="dollar" key={i} src="/dollar.png" draggable="false"></img>);      
    }
    return price;
  }

  const toggleExpanded = (id) => {
    setExpanded(!expanded);
    // console.log(expanded);
    document.getElementById(id).scrollIntoView();
  };

  return (
    <div id={data._id} className={expanded ? "itinerary-expanded" : "itinerary"}>
      <div className="hashtags">
      {data.hashtags !== undefined ?
      data.hashtags.map((each, index) => {
        return <p className="hash" key={index}>#{each}</p>
      }) : <></>}
      </div>
      <div className="iti-flex">
        <div>
          <p>Price:</p>
          {renderPrice()}
          <p>Duration:</p>
          <p className="text-sm">{data.duration} hour(s)</p>
        </div>
        <div className="author-info">
          <img src={data.photo} alt="Author photo" draggable="false"/>
          <p>{data.author}</p>
        </div>
        <div className="likes">
          <img src="/likes.png" alt="Likes" />
          <p>{data.likes}</p>
        </div>
      </div>
      {
        expanded ?
        <>
          <hr />
          <h3>Activities & Comments</h3>
          <p>This section is under construction</p>
          <img className="meme" src="/meme.gif" alt="" />
        </> :
        <></>
      }
      <h3 className="expand-itinerary-button" onClick={() => toggleExpanded(data._id)}>{expanded ? "View Less" : "View More"}</h3>
    </div>
  );
}