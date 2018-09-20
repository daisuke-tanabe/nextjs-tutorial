// @flow
// test
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function stringLength(str: string): string {
  return `${str}!`;
}

const message = stringLength('Welcome to');

const Title = ({ className }) => <h1 className={className}>{message}</h1>;

Title.propTypes = {
  className: PropTypes.string.isRequired
};

const StyledTitle = styled(Title)`
  color: red;
  font-size: 28px;
`;

export default StyledTitle;
