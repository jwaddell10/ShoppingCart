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
      <img src="src/assets/HomePageBackground.png" alt="laptopcomputerondesk"/>
    </>
  );
}

const StyledH1 = styled.h1`
  color: #333;
  font-size: 2em;
  display: flex;
`;

const StyledBody = {
  height: '100vh', // Note: Specify units for height
  margin: 0,
  backgroundImage: 'url("src/assets/HomePageBackground.png")', // Note: Use camelCase for backgroundImage
  backgroundSize: 'cover', // Note: Use camelCase for backgroundSize
  backgroundPosition: 'center', // Note: Use camelCase for backgroundPosition
};

export default HomePage;
