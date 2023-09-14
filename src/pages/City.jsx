import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../pages/City.module.css";
import { Link, useParams } from "react-router-dom";
import Itinerary from "../components/Itinerary";
import { useDispatch, useSelector } from "react-redux";
import { getCity } from "../redux/actions/cityAction";
import { getItineraries } from "../redux/actions/itineraryAction";

export default function City() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const city = useSelector(store => store.cityReducer.city);
  const itineraries = useSelector(store => store.itineraryReducer.itineraries);
  // console.log(itineraries);

  useEffect(() => {
    dispatch(getCity(id));
    dispatch(getItineraries(id));
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.detail}>
          <img src={city.image} draggable="false"></img>
          <h1>{city.city}{itineraries !== undefined ? "," : <></>} {city.country}</h1>
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
            return <Itinerary key={index} id={index}/>
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