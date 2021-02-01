import React from 'react';
import PropTypes from 'prop-types';

const renderCrumbs = (categories) => categories.map((i) => (
  <li key={i.id} className="breadcrumb-item">
    <a href={`/items?search=${i.name}`} className="color-2">
      {i.name}
    </a>
  </li>
));
export default function BreadCrumb(props) {
  const { categories } = props;
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">{renderCrumbs(categories)}</ol>
      <style jsx>
        {`
          .breadcrumb {
            background-color: transparent;
            margin-bottom: 0;
            padding: 16px 0;
          }
          p {
            margin-bottom: 0;
          }
        `}
      </style>
    </nav>
  );
}
BreadCrumb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object),
};
// Same approach for defaultProps too
BreadCrumb.defaultProps = {
  categories: [],
};
