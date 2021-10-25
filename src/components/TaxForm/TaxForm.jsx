import React, { useState } from "react";
import { fetchTaxRates } from "../../api/TaxApi";
import { calculateTotalTax } from "../../utils/TaxUtils";
import SubmitButton from "../SubmitButton/SubmitButton";
import TaxResults from "../TaxResults/TaxResults";
import * as Styled from "./TaxForm.styles";
import * as Sentry from "@sentry/react";

const TaxForm = () => {
  const [taxYear, setTaxYear] = useState(0);
  const [annualIncome, setAnnualIncome] = useState(0);
  const [totalTax, setTotalTax] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTaxYearChange = (year) => {
    year = year.replace(/\D/g, "");
    setTaxYear(year);
  };

  const handleAnnualIncomeChange = (income) => {
    income = income.replace(/\D/g, "");
    setAnnualIncome(income);
  };

  const isDisabled = () => {
    if (
      loading ||
      !annualIncome ||
      (Number(taxYear) !== 2019 && Number(taxYear) !== 2020)
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    // Hit API for latest data
    try {
      const taxData = await fetchTaxRates(taxYear);
      // Perform calculations
      setTotalTax(calculateTotalTax(annualIncome, taxData.tax_brackets));
    } catch (error) {
      Sentry.captureException(error);
      setError(error);
      setTotalTax(null);
    }
    setLoading(false);
  };

  return (
    <Styled.Container>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Header>Tax Calculator 💰</Styled.Header>
        Annual Income
        <Styled.Input
          value={annualIncome}
          onChange={(event) => handleAnnualIncomeChange(event.target.value)}
          placeholder="Annual Income"
        />
        Tax Year (2019 or 2020)
        <Styled.Input
          value={taxYear}
          onChange={(event) => handleTaxYearChange(event.target.value)}
          placeholder="Tax Year"
        />
        <SubmitButton
          isLoading={loading}
          isDisabled={isDisabled()}
          LoadingText="LOADING..."
        />
      </Styled.Form>
      {error ? "An unexpected error occurred, please try again." : null}
      {totalTax ? <TaxResults taxOwed={totalTax} /> : null}
    </Styled.Container>
  );
};

export default TaxForm;
