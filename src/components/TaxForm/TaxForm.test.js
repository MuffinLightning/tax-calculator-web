import { render, screen } from "@testing-library/react";
import TaxForm from "./TaxForm";
import userEvent from "@testing-library/user-event";

describe("TaxForm component", () => {
  it("annual income input should update value onChange", () => {
    render(<TaxForm />);

    const input = screen.getByPlaceholderText("Annual Income");
    userEvent.clear(input);
    userEvent.type(input, "50000");
    expect(input).toHaveValue("50000");
  });

  it("tax year input should update value onChange", () => {
    render(<TaxForm />);

    const input = screen.getByPlaceholderText("Tax Year");
    userEvent.clear(input);
    userEvent.type(input, "2020");
    expect(input).toHaveValue("2020");
  });

  it("isDisabled function", () => {
    render(<TaxForm />);

    const incomeInput = screen.getByPlaceholderText("Annual Income");
    userEvent.clear(incomeInput);
    userEvent.type(incomeInput, "50000");

    const yearInput = screen.getByPlaceholderText("Tax Year");
    userEvent.clear(yearInput);
    userEvent.type(yearInput, "2020");

    const submitButton = screen.getByRole("button");

    expect(submitButton).not.toHaveAttribute("disabled");
  });
});
