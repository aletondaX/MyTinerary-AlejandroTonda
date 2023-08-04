function NavBar() {
  return (
    <nav>
      <a href="">Home</a>
      <a href="">Cities</a>
      <a className="highlight-button" href="">Log In</a>
      {/* <a href=""><img src="default-user.jpg" alt="" /></a> */}
      <img src="default-user.jpg" alt="" />
    </nav>
  );
}

export default NavBar;