import { fetchTaxRates } from "./TaxApi";

const mockRates = [
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

describe("TaxApi", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("calls the api with the correct year", async () => {
    fetch.mockResponseOnce(JSON.stringify(mockRates));

    const rate = await fetchTaxRates("2020");
    expect(rate).toEqual(mockRates);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:5000/tax-calculator/brackets/2020"
    );
  });

  it("returns null when exception", async () => {
    fetch.mockReject(() => Promise.reject("API is down"));

    const rate = await fetchTaxRates("2019");

    expect(rate).toEqual(null);
    expect(fetch).toHaveBeenCalledWith(
      "http://localhost:5000/tax-calculator/brackets/2019"
    );
  });
});
