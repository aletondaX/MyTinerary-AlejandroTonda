import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../pages/City.module.css";
import { Link, useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";
// import { useSelector } from "react-redux";

export default function City() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [itineraries, setItineraries] = useState();
  // const store = useSelector(store => store);
  // console.log(store);

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("cities.json");
      const response = await fetch("http://localhost:4000/api/cities/" + id);
      const json = await response.json();
      // console.log(json.response);
      setData(json.response)

      const itiRes = await fetch("http://localhost:4000/api/itineraries/city/" + id);
      const itiJson = await itiRes.json();
      // console.log(itiJson.response);
      setItineraries(itiJson.response)
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.detail}>
          <img src={data.image} draggable="false"></img>
          <h1>{data.city}, {data.country}</h1>
        </div>
        <div className="flexy">
        {
          itineraries === undefined ?
          <>
            <h3>Loading Itineraries...</h3>
            <img src="/meme.gif"></img>
          </> :
          itineraries.length > 0 ?
          itineraries.map((each, index) => {
            return <Itinerary key={index} id={each._id}/>
          }) :
          <h3>There are no itineraries yet for this city ☻</h3>
        }
        </div>
        <Link className={styles.goback} to="/cities">Back to Cities</Link>
      </main>
      <Footer />
    </>
  );
}