import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio branding", () => {
  render(<App />);
  const linkElement = screen.getByText(/Auqid Irfan/i);
  expect(linkElement).toBeInTheDocument();
});
