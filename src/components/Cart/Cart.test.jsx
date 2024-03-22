import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

// import { render, screen } from "@testing-library/react";
// import Cart from './Cart'

//test if item is added to cart
//test if removefromcart works

describe("Cart", () => {
	it("renders component", () => {
		render(<Cart />);
		screen.debug();
	});
});