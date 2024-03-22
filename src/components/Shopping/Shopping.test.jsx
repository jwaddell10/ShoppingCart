import { vi } from "vitest";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

	it("should call the onClick function when clicked", async () => {
		const onClick = vi.fn();
		const user = userEvent.setup();
		render(<button onClick={onClick} />);

		const button = screen.getByRole("button", { name: "" });

		await user.click(button);

		expect(onClick).toHaveBeenCalled();
	});

	it("should not call the onClick function when it isn't clicked", async () => {
		const onClick = vi.fn();
		render(<button onClick={onClick} />);

		expect(onClick).not.toHaveBeenCalled();
	});
});
