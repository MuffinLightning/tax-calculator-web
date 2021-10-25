import React from "react";
import * as Styled from "./SubmitButton.styles";
import PropTypes from "prop-types";

const SubmitButton = ({ isDisabled, isLoading, LoadingText }) => {
  return (
    <Styled.Button disabled={isDisabled} type="submit">
      {isLoading ? LoadingText : "SUBMIT"}
    </Styled.Button>
  );
};

SubmitButton.propTypes = {
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  LoadingText: PropTypes.string,
};

export default SubmitButton;
