import { calculateTotalTax } from "../utils/TaxUtils";

const mockTaxBracket = [
  {
    max: 48535,
    min: 0,
    rate: 0.15,
  },
  {
    max: 97069,
    min: 48535,
    rate: 0.205,
  },
  {
    max: 150473,
    min: 97069,
    rate: 0.26,
  },
  {
    max: 214368,
    min: 150473,
    rate: 0.29,
  },
  {
    min: 214368,
    rate: 0.33,
  },
];

describe("calculateTotalTax", () => {
  test.each`
    a           | b                 | expected
    ${"48535"}  | ${mockTaxBracket} | ${"7280.25"}
    ${"150473"} | ${mockTaxBracket} | ${"39122.98"}
    ${"214369"} | ${mockTaxBracket} | ${"70741.77"}
  `("returns $expected when income is $a", ({ a, b, expected }) => {
    const totalTax = calculateTotalTax(a, b);
    expect(totalTax).toBe(expected);
  });
});
