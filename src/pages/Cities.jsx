import Header from "../components/Header";
import CitySearch from "../components/CitySearch";
import Footer from "../components/Footer";
import styles from "./Cities.module.css";

export default function Cities() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_above}>
          <h1>Cities</h1>
          <p>A collection of the most beautiful places and experience</p>
        </div>
        <div className={styles.main_below}>
          <CitySearch />
        </div>
      </main>
      <Footer />
    </>
  );
}