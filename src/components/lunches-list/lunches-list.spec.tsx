import React from "react";
import { render, screen } from "@testing-library/react";

import LunchesListComponent from "./lunches-list.component";

describe("LunchesListComponent", () => {
  it("Render component correctly", () => {
    render(<LunchesListComponent />);
    expect(screen.getByText(/LunchesListComponent/i)).toBeInTheDocument();
  });
});
