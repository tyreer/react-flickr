import React from 'react';
import PropTypes from 'prop-types';
import { getOrdinal, ensureDouble } from '../utils/ordinals';

export default function Published(props) {

  const date = new Date(props.publishedData);
  const day = getOrdinal(date.getDate());
  const month = date.toLocaleDateString("en-uk", { month: "short" });
  const year = date.toLocaleDateString("en-uk", { year: "numeric" });
  const hour = date.getUTCHours();
  const minutes = ensureDouble(date.getUTCMinutes());

  return (
    <p className='PhotoListing__published'>Published: {day} {month} {year} at {hour}:{minutes}</p>
  )
}

Published.propTypes = {
  publishedData: PropTypes.string,
};
