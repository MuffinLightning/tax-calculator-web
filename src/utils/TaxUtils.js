// Returns a string representation of the total tax owed, given an income (string) and taxBrackets (object).
export const calculateTotalTax = (income, taxBrackets) => {
  let rate = 1;

  for (const bracket of taxBrackets) {
    if (income <= bracket.max || !bracket.max) {
      rate = Number(bracket.rate);
      break;
    }
  }

  return (income * rate).toFixed(2);
};
