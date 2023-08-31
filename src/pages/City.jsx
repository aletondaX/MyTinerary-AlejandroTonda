import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../pages/City.module.css";
import { Link, useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";

export default function City() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [itineraries, setItineraries] = useState();

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
        {
          itineraries !== undefined ?
            itineraries.map((each, index) => {
              // console.log(each._id);
              return (
                <Itinerary key={index} id={each._id}/>
              )
              })
        : <h2>Loading Itineraries...</h2>}
        <Link className={styles.goback} to="/cities">Go back</Link>
      </main>
      <Footer />
    </>
  );
}