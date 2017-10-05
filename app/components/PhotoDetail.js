import React from 'react';
import PropTypes from 'prop-types';
import Published from './Published';
import Title from './Title';
import AuthorName from './AuthorName';
import Description from './Description';
import Tags from './Tags';

export default function PhotoDetail(props) {

  return (
    <div className='PhotoDetail'>
      <div className='PhotoDetail__title-container'>
        <Title
          listingTitle = {props.selectedImg.title}
          detailLink = {props.selectedImg.link} />
        <AuthorName
          listingAuthor = {props.selectedImg.author}
          listingLink = {props.selectedImg.link} /> |
        <Published publishedData = {props.selectedImg.published} />
      </div>
      <div className='PhotoDetail__img-container'>
        <img
          className='PhotoDetail__img'
          src = {props.selectedImg.media.m}>
        </img>
        <div className='PhotoDetail__description-container'>
          <Description decriptionData={props.selectedImg.description} />

          {props.selectedImg.tags === ''
          ? <p>Tags: None</p>
          : <Tags
              imgTags = {props.selectedImg.tags}
              handleTagClick = {props.handleTagClick}/>}
        </div>
      </div>
      <button
        className='PhotoDetail__button'
        onClick={props.handleBack}>
          Back
      </button>
    </div>
  );
}

PhotoDetail.propTypes = {
  selectedImg: PropTypes.object,
  handleTagClick: PropTypes.func,
  handleBack: PropTypes.func,
};
