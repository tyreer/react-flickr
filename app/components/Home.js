import React, { Component } from 'react';
import { getFlickr } from '../utils/api';
import PhotoListing from './PhotoListing';
import PhotoDetail from './PhotoDetail';

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tag: null,
      photos: null,
      selected: null,
      homeClass: 'Home__wrapper'
    }

    this.handleSelect = this.handleSelect.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  componentDidMount() {
    this.addFlickrData(this.state.tag);
  }

  addFlickrData(tag) {
    let returnedData;
    getFlickr(tag)
    .then ((response) => {
      this.setState({
        photos: response
      })
    });
  }

  handleSelect(selectedListing) {
    this.setState({
      selected: selectedListing,
      homeClass: 'Home--expanded'
    })
  }

  handleBack() {
    this.setState({
      selected: null,
      homeClass: 'Home__wrapper'
    })
  }

  handleTagClick(clickedTag) {
    this.setState({
      selected: null,
      tag: clickedTag,
      photos: null,
      homeClass: 'Home__wrapper'
    })
    this.addFlickrData(clickedTag);
  }

  render() {
    return(
      <div className={this.state.homeClass}>
        <h1 className="Home__title">Flickr Public Feed</h1>
        {!this.state.photos
        ? <h3 className="Home__loading">LOADING</h3>
        : <PhotoListing
            photosArr={this.state.photos}
            handleSelect={this.handleSelect} />}
        {!this.state.selected
        ? null
        : <PhotoDetail
            selectedImg={this.state.selected}
            handleBack = {this.handleBack}
            handleTagClick = {this.handleTagClick} />}
      </div>
    )
  }
}
