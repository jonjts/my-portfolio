import { render, screen } from "@testing-library/react";
import { Footer } from "../Footer";

describe("Footer", () => {
  window.open = jest.fn();
  it("open links", () => {
    render(<Footer />);
    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    const emailLink = screen.getByRole("link", { name: /email/i });

    expect(githubLink).toHaveAttribute("href", "https://github.com/jonjts");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://linkedin.com/in/jonjts"
    );
    expect(emailLink).toHaveAttribute("href", "mailto:jonjts@gmail.com");
  });
});
