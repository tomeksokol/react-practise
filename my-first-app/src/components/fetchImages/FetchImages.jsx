import React, { Component } from 'react';


export class FetchImages extends Component {

  state = {
    images: [],
    error: null,
    keyWord: "car",
    page: 1,
    id: [],
    webformatURL: [],
    largeImageURL: [],
  }

 fetchData = () => {
    fetch(`https://pixabay.com/api/?key=23580980-4f75151f85975025bb6074227&q=${this.state.keyWord}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`)
    .then(data => data.json())
    .then(keyWord => {
      console.log(keyWord);
      console.log(keyWord.hits);
    })
  }




 componentDidMount() {
  this.fetchData();
 }


  render() {
    return (
      <div>
        <p></p>
      </div>
    )
  }
}

export default FetchImages
