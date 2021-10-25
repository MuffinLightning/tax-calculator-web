import React from "react";
import * as Styled from "./TaxResults.styles";
import PropTypes from "prop-types";

const TaxResults = ({ taxOwed }) => {
  return (
    <Styled.ResultsContainer>
      <Styled.Header>Tax Results</Styled.Header>

      <Styled.ResultsText>
        <h2>Tax Owed</h2>
        <h2>{`$${taxOwed}`}</h2>
      </Styled.ResultsText>
    </Styled.ResultsContainer>
  );
};

TaxResults.propTypes = {
  taxOwed: PropTypes.string,
};

export default TaxResults;
