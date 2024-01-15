import NavBar from "./NavBar.jsx";

function HomePage() {
  //needs three icons, image assets?
  //probably needs a router to the three icons
  //no functionality really? just display things
  return (
    <>
      <NavBar />
      <Body />
    </>
  );
}

function Body() {
  return (
    <>
      <h1>body content here</h1>
    </>
  );
}

export default HomePage;
