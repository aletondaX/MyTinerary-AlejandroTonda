import NavBar from "./NavBar";

function Header() {
  return (
    <header>
      <div>
        <img id="logo" src="logo.png" alt="Logo" />
        <h1>My Tinerary</h1>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;