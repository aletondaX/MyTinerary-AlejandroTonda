import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../pages/City.module.css";
import { Link, useParams } from "react-router-dom";

export default function City() {
  const { id } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch("cities.json");
      const response = await fetch("http://localhost:4000/api/cities/" + id);
      const json = await response.json();
      console.log(json.response);
      setData(json.response)
      // setData(json.response.find(city => {
      //   return city._id == id;
      // }));

    };
    fetchData().catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.detail}>
          <img src={data.image}></img>
          <h1>{data.city}, {data.country}</h1>
        </div>
        <h3>This page is under construction...</h3>
        <Link className={styles.goback} to="/cities">Go back</Link>
      </main>
      <Footer />
    </>
  );
}