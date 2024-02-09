import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

describe("NavBar", () => {
    it("renders component", () => {
        render(<nav />);
        screen.debug();
    });
});