import { render, screen } from "@testing-library/react";

import Home from "../Home";

describe("Home", () => {
  it("render home page", () => {
    render(<Home />);
    expect(screen.getByText("Hi, I'm Jonas")).toBeInTheDocument();
    expect(screen.getByText("Follow me")).toBeInTheDocument();
    expect(screen.getByText("Coffee")).toBeInTheDocument();
    expect(
      screen.getByText(/technologies I’ve been using/i)
    ).toBeInTheDocument();
  });
});
