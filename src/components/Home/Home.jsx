import styled from "styled-components";

function HomePage() {
  //needs three icons, image assets?
  //probably needs a router to the three icons
  //no functionality really? just display things
  return (
    <>
      <Body />
    </>
  );
}

function Body() {
  return (
    <>
      <img
        src="assets/HomePageBackground.png"
        alt="laptopcomputerondesk"
        style={imageStyle}
      />
    </>
  );
}

const imageStyle = {
  margin: "0",
  width: "100vw",
};

export default HomePage;
