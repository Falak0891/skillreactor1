import { render, screen, cleanup } from "@testing-library/react";
// import screen from "@testing-library/react";
// import cleanup from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("HTML Elements", () => {
  test("Heading exists", () => {
    render(<App />);
    const element = screen.getByTestId("name");
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("H1");
  });

  test("Paragraph exists", () => {
    render(<App />);
    const element = screen.getByTestId("info");
    expect(element).toBeInTheDocument();
    expect(element.nodeName).toBe("P");
  });

  test("List exists", () => {
    render(<App />);
    const element = screen.getByTestId("skills");
    expect(element).toBeInTheDocument();
    let flag = false;
    if (element.nodeName === "UL" || element.nodeName === "OL") flag = true;
    expect(flag).toBe(true);
  });
  test("List consists for 3 skills", () => {
    render(<App />);
    const element = screen.getByTestId("skills");
    const items = element.children;
    expect(items.length).toBe(3);
    for (let i = 0; i < 3; i++) {
      expect(items[i].nodeName).toBe("LI");
    }
  });
});
