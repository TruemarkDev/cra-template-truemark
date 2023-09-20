import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "components/Home/Welcome";

describe("Dashboard Component", () => {
  test("renders the component", () => {
    render(<Home />);

    const text = screen.getByText("home.welcome");

    expect(text).toBeInTheDocument();
  });
});
