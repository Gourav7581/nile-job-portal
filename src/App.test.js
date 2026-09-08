import { render, screen } from "@testing-library/react";
import Info from "./component/Info";
import Choose from "./component/Choose";

test("renders the careers introduction", () => {
  render(<Info />);
  expect(screen.getByText(/find your dream career/i)).toBeInTheDocument();
});

test("renders the responsive career value cards", () => {
  render(<Choose />);
  expect(screen.getByText(/why choose nile/i)).toBeInTheDocument();
  expect(screen.getByText(/diversity and inclusion/i)).toBeInTheDocument();
});
