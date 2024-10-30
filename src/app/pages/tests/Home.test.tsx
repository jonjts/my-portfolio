import { render, screen } from "@testing-library/react";

import Home from "../Home";

describe("Home", () => {
  window.open = jest.fn();
  it("render home page", () => {
    render(<Home />);
    expect(screen.getByText("Hi, I'm Jonas")).toBeInTheDocument();
    expect(screen.getByText("Follow me")).toBeInTheDocument();
    expect(screen.getByText("Coffee")).toBeInTheDocument();
    expect(
      screen.getByText(/technologies I’ve been using/i)
    ).toBeInTheDocument();
  });

  it("open cv", () => {
    render(<Home />);
    const cvButton = screen.getByText("Look at my CV");
    cvButton.click();
    expect(window.open).toHaveBeenCalledWith("/cv.pdf", "_blank");
  });
});
