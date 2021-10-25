import { render, screen } from "@testing-library/react";
import TaxResults from "./TaxResults";

describe("TaxResults component", () => {
  it("displays the correct tax owed", () => {
    render(<TaxResults taxOwed={"5000"} />);

    const textValue = screen.getByText("$5000");
    expect(textValue).toBeInTheDocument();
  });
});
