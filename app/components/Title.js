import React from 'react';
import PropTypes from 'prop-types';

export default function Title(props) {

  let title;

  if (props.listingTitle.length > 1 && props.listingTitle.length < 35) {
    title = props.listingTitle;
  } else if (props.listingTitle.length > 45 && window.innerWidth > 1000) {
    title = `${props.listingTitle.substring(0, 45)}...`;
  } else if (props.listingTitle.length > 35) {
    title = `${props.listingTitle.substring(0, 35)}...`;
  } else {
    title = 'No title';
  }

  return (
    <h2 className='PhotoListing__title' onClick={props.onClick}>
      <a href={props.detailLink}> {title} </a>
    </h2>
  )
}

Title.propTypes = {
  listingTitle: PropTypes.string,
};
