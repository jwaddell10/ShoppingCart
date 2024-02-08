import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";
import NavBar from "./components/NavBar/NavBar";

describe("App", () => {
  it("renders component", () => {
    render(<App title="App" />);
    screen.debug();
  });

  it("renders navbar", () => {
    render(<nav name='navbar' />);
    // expect(screen.getByText("navbar")).toBeInTheDocument();
  // it('renders routes', () => {
  //   render(<route />)
  // })
  });
});
