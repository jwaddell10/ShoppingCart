import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <nav className="navbar">
      <StyledNavBar>
        <h3>Website Name</h3>
        <ul>
          <StyledList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shopping">Shopping</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </StyledList>
        </ul>
      </StyledNavBar>
    </nav>
  );
}

const StyledNavBar = styled.section`
  display: flex;
  padding: 0 1vw;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;

const StyledList = styled.section`
  list-style-type: none;
  gap: 1vw;
  display: flex;
`;

export default NavBar;
