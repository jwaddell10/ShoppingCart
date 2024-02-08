import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { describe, it, expect } from "vitest";

describe("App component", () => {
    it("renders an image with the accessible name 'computer'", () => {
      render(<Home />);
      expect(screen.getByRole("img",)).toBeInTheDocument();
    });
  });