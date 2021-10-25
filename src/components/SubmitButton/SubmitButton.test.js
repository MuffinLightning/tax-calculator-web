import { render, screen } from "@testing-library/react";
import SubmitButton from "./SubmitButton";

describe("SubmitButton component", () => {
  it("renders with default button text", () => {
    const defaultText = "SUBMIT";

    render(<SubmitButton isDisabled={false} />);

    expect(screen.getByRole("button")).toHaveTextContent(defaultText);
  });

  it("button text changes to LoadingText prop when isLoading", () => {
    const newText = "LOADING";

    render(<SubmitButton LoadingText={newText} isLoading isDisabled={false} />);

    expect(screen.getByRole("button")).toHaveTextContent(newText);
  });

  it("button is disabled when isDisabled", () => {
    render(<SubmitButton isDisabled={true} />);

    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
});
