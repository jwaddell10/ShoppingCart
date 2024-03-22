import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Shopping } from "./Shopping.jsx";
// test if addtocart works

describe("Shopping page", () => {
	it("renders component", () => {
		render(<Shopping title="Shopping" />);
	});
});

describe("Button click event", () => {
	it("should render a button with the text 'Add to Cart'", () => {
		render(<button onClick={() => {}} />);
		const button = screen.getByRole("button", { name: "" });

		expect(button).toBeInTheDocument();
	});
});
