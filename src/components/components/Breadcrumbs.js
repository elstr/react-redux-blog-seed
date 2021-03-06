import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import { map } from 'lodash';

const BreadCrumbs = ({ links }) => (
  <span className="breadcrumbs">
    { map(links, (link, i) => (
      <span key={i}>
        <Link to={link.href}>{link.name}</Link>
      </span>
    ))}
  </span>
);

BreadCrumbs.propTypes = {
  links: PropTypes.array.isRequired,
};

export default BreadCrumbs;
