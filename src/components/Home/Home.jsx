import styled from 'styled-components';

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
      <img src="src/assets/HomePageBackground.png" alt="laptopcomputerondesk" style={imageStyle}/>
    </>
  );
}

const imageStyle = { 
  margin: "0",
  width: "100%", // Make the image responsive by setting width to 100%
  height: "auto", // Maintain the aspect ratio
  objectFit: "cover", // You may want to use "cover" or "contain" based on your design
};

export default HomePage;
