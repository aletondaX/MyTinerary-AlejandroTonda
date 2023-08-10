import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Index() {
  return (
    <>
      <Header />

      <main>
        <div className="main-center">
          <h2>Find your perfect trip, designed by insiders who know and love their cities!</h2>
        </div>
        <div className="main2">
          <div className="main-left">
            <h2>Find the perfect destination</h2>
            <p>
              Our app will help you find the perfect path for your next trip.
              With an easy-to-use interface and a host of itinerary options,
              planning your best trip has never been easier.
            </p>
            <Link className="highlight-button cta" to="/cities">
              Take me there!
            </Link>
          </div>
          <div className="main-right">
            <h1>Popular MyTineraries</h1>
            <Carousel />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
