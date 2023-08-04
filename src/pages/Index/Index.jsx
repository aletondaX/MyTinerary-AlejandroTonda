import "./Index.css";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";

function Index() {
  return (
    <>
      <Header />

      <main>
        <div className="main-left">
          <h2>Find the perfect destination</h2>
          <p>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your best trip has never been easier.</p>
          <a className="highlight-button" href="">View More</a>
        </div>
        <div className="main-right">
          {/* <img src="index-img.jpg" alt="Image" /> */}
          <div>
            <Carousel />
          </div>
        </div>
      </main>

      {/* <footer></footer> */}
    </>
  );
}

export default Index;