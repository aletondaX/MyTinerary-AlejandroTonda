import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <div>
        <img id="logo" src="logo10.png" alt="Logo" />
        <h1>My Tinerary</h1>
      </div>
      <NavBar />
    </header>
  );
}