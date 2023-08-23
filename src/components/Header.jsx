import NavBar from "./NavBar";

export default function Header() {
  return (
    <header>
      <div>
        <img id="logo" src="/logo.png" alt="Logo" />
        <h1>MyTinerary</h1>
      </div>
      <NavBar />
    </header>
  );
}