import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Shopping } from "./Shopping.jsx";
// test if item renders on page
// test if addtocart works

describe("Shopping page", () => {
    it("renders component", () => {
      render(<Shopping title="Shopping" />);
    })
  });