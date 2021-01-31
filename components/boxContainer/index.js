import React from 'react';
import PropTypes from 'prop-types';

const BoxContainer = ({ children, containerStyles }) => {
  console.log(containerStyles)
    containerStyles = containerStyles ? 'padding-32' : 'padding-16';
    return (
      <div className={`boxContainer ${containerStyles}`}>
        {children}
        <style jsx>{`
            .boxContainer {
                background-color: white;
                border-radius: 6px;
            }
            `}
        </style>
      </div>
    );
};
BoxContainer.propTypes = {
    children: PropTypes.objectOf(PropTypes.any),
    containerStyles: PropTypes.objectOf(PropTypes.object),
  };
  // Same approach for defaultProps too
BoxContainer.defaultProps = {
    children: {},
    containerStyles: {},
};

export default BoxContainer;
