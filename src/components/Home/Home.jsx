function HomePage() {
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
        name="computer"
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
