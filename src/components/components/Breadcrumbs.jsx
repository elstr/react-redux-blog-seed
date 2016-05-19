import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export const BreadCrumbs = ({ links }) => (
  <h2>
    { _.map(links, link => (
      <Link to={link.href}>{link.name}</Link> ))
    }
  </h2>
);
