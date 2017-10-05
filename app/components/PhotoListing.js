import React from 'react';
import PropTypes from 'prop-types';
import Published from './Published';
import Title from './Title';
import AuthorName from './AuthorName';

export default function PhotoListing (props) {

  return (
    <ul>
      {props.photosArr.map( (listing) => {
        return (
        <li
          key={listing.link}
          className='PhotoListing__listing'>
          <img
            className='PhotoListing__img'
            onClick={() => {props.handleSelect(listing)}}
            src={listing.media.m}>
          </img>
          <div className='PhotoListing__text-container'>
            <Title
              onClick={() => {props.handleSelect(listing)}}
              listingTitle={listing.title} />
            <div className='PhotoListing__links-container'>
              <AuthorName
                listingAuthor={listing.author}
                listingLink={listing.link} />
              <Published publishedData={listing.published} />
              <p className='PhotoListing__flickr-link'><a href={listing.link}>View on Flickr</a></p>
            </div>
          </div>
        </li>
        )
      })}
    </ul>
  )
}

PhotoListing.propTypes = {
  photosArr: PropTypes.array,
};
