import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Itinerary(props) {
  const [expanded, setExpanded] = useState(false);

  const itineraries = useSelector(store => store.itineraryReducer.itineraries);
  // console.log(itineraries);

  const renderPrice = () => {
    let price = [];
    for (let i = 0; i < itineraries[props.id].price; i++) {
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
    <div id={itineraries[props.id]._id} className={expanded ? "itinerary-expanded" : "itinerary"}>
      <div className="hashtags">
      {itineraries[props.id].hashtags !== undefined ?
      itineraries[props.id].hashtags.map((each, index) => {
        return <p className="hash" key={index}>#{each}</p>
      }) : <></>}
      </div>
      <div className="iti-flex">
        <div>
          <p>Price:</p>
          {renderPrice()}
          <p>Duration:</p>
          <p className="text-sm">{itineraries[props.id].duration} hour(s)</p>
        </div>
        <div className="author-info">
          <img src={itineraries[props.id].photo} alt="Author photo" draggable="false"/>
          <p>{itineraries[props.id].author}</p>
        </div>
        <div className="likes">
          <img src="/likes.png" alt="Likes" />
          <p>{itineraries[props.id].likes}</p>
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
      <h3 className="expand-itinerary-button" onClick={() => toggleExpanded(itineraries[props.id]._id)}>{expanded ? "View Less" : "View More"}</h3>
    </div>
  );
}