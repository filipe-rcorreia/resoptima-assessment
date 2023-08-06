import { render, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

test("calls onSearch when search button is clicked", () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText, getByTitle } = render(<SearchBar onSearch={mockOnSearch} />);

  const input = getByPlaceholderText("Search");
  const searchBtn = getByTitle("Search");

  fireEvent.change(input, { target: { value: "Test search" } });

  fireEvent.click(searchBtn);

  expect(mockOnSearch).toHaveBeenCalledWith("Test search");
});

test("calls onSearch when Enter key is pressed", () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText } = render(<SearchBar onSearch={mockOnSearch} />);

  const input = getByPlaceholderText("Search");

  fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });

  expect(mockOnSearch).toHaveBeenCalledTimes(1);
});
