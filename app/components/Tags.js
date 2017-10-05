import React from 'react';
import PropTypes from 'prop-types';

export default function Tags(props) {
  
  const tags = props.imgTags.split(' ');

  return (
    <ul className='PhotoDetail__tags'>
      <li>Tags:</li>
      {tags.map( (tag, index) => {
        if (window.innerWidth > 500 || index < 6) {
          return (
            <li
              key={tag}
              onClick={() => {props.handleTagClick(tag)}}>
              {tag}
            </li>
          )
        }
      })}
    </ul>
  )
}

Tags.propTypes = {
  handleTagClick: PropTypes.func,
};
