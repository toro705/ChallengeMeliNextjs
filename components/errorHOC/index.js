import React from 'react';
import PropTypes from 'prop-types';
import Error from 'next/error';

export default function ErrorHOC(props) {
  const { error, children } = props;
  if (error === true) {
    return <Error />;
  }
  return <div>{children}</div>;
}
ErrorHOC.propTypes = {
  children: PropTypes.element.isRequired,
  error: PropTypes.bool,
};
ErrorHOC.defaultProps = {
  error: false,
};
