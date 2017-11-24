import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function PageNotFound({ location }) {
  return (
    <p>Page not found.</p>
  );
}

PageNotFound.propTypes = propTypes;
