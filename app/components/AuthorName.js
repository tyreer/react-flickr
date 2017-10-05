import React from 'react';
import PropTypes from 'prop-types';

export default function AuthorName(props) {

  const authorData = props.listingAuthor.split(`("`)[1];
  const authorName = authorData.substring(0, authorData.length-2);
  const profileURL = props.listingLink.split(`/`).slice(0,5).join('/');

  return (
    <p className='PhotoListing__author'><a href={profileURL}>{authorName}</a></p>
  )
}

AuthorName.propTypes = {
  listingAuthor: PropTypes.string,
  listingLink: PropTypes.string,
}

AuthorName.defaultProps = {
  listingAuthor: 'Unknown',
}
