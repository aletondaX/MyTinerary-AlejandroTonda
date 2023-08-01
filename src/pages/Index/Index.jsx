import "./index.css";

function Index() {
  return (
    <>
      <header>
        <h2>My Tinerary</h2>
        <nav>
          <a href="">Home</a>
          <a href="">Cities</a>
          <a className="highlight-button" href="">
            Login
          </a>
        </nav>
      </header>

      <main>
        <div className="main-left">
          <h2>Find the perfect destination</h2>
          <p>
            Our app will help you find the perfect path for your next trip. With
            an easy-to-use interface and a host of itinerary options, planning
            your best trip has never been easier.
          </p>
          <a className="highlight-button" href="">View More</a>
        </div>
        <div className="main-right">
          <img src="index-img.jpg" alt="Image" />
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Index;
