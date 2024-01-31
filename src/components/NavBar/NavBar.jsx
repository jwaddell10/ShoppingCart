import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  const headingStyle = {
    color: "white",
  };

  const linkStyle = {
    color: "white",
  };

  return (
    <nav className="navbar">
      <StyledNavBar>
        <h3 style={headingStyle}>Electronics Store</h3>
        <ul>
          <StyledList>
            <li>
              <Link style={linkStyle} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/shopping">
                Shopping
              </Link>
            </li>
            <li>
              <Link style={linkStyle} to="/cart">
                Cart
              </Link>
            </li>
          </StyledList>
        </ul>
      </StyledNavBar>
    </nav>
  );
}

const StyledNavBar = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  background-color: rgb(17, 17, 17);
  position: fixed;
  border-bottom: 2px solid black;
  top: 0px;
  left: 50%;
  margin-left: -50vw;
  z-index: 10;
  font-size: 2vmin;
  font-weight: 400;
`;

const StyledList = styled.section`
  color: white;
  list-style-type: none;
  gap: 2vw;
  display: flex;

  li {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
    transition: border-color 0.3s, box-shadow 0.3s;
  }

  li:hover {
    border: 2px solid white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export default NavBar;
