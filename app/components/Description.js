import React from 'react';
import PropTypes from 'prop-types';

export default function Description(props) {

  let description = props.decriptionData.split('<p>')[3];

  if (description !== undefined && description.length >= 110 && window.innerWidth < 500) {
    description = `${description.substring(0,110)}...`
  }

  if (description === undefined) {
    return (
      <div className='PhotoDetail__description'>
        <p>No description</p>
      </div>
    )
  } else {
    return (
      <div className='PhotoDetail__description' dangerouslySetInnerHTML={{ __html: `<p>${description}` }} />
    )
  }
}

Description.propTypes = {
  decriptionData: PropTypes.string,
}
