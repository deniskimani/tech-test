import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search", () => {
  const validProps = [
    "https://images-assets.nasa.gov/image/PIA13517/PIA13517~thumb.jpg",
    "https://images-assets.nasa.gov/image/PIA13517/PIA13517~thumb.jpg",
  ];
  const { asFragment } = render(<SearchResults results={validProps} />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
