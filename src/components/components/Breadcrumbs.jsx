import React from 'react';

import { Link } from 'react-router';
import _ from 'lodash';

export const BreadCrumbs = ({ links }) => (
  <span className="breadcrumbs">
    { _.map(links, (link, i) => (
      <span key={i}>
        <Link to={link.href}>{link.name}</Link>
      </span>
    ))}
  </span>
);
