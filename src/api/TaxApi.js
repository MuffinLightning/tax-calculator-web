export const fetchTaxRates = async (year) => {
  try {
    const response = await fetch(
      `http://localhost:5000/tax-calculator/brackets/${year}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
};
