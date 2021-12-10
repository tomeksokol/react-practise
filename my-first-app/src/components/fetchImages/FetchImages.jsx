import React, { Component } from 'react';


export class FetchImages extends Component {

  state = {
    images: [],
    error: null,
    keyword: "car",
    page: 1,

  }

 fetchData = () => {
    fetch(`https://pixabay.com/api/?key=23580980-4f75151f85975025bb6074227&q=${this.state.keyword}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.state.page}&per_page=12`)
    .then(data => data.json())
    .then(keyword => {
      this.setState({images: keyword.hits})
      console.log(keyword);
      console.log(`Number of images array: `, keyword.hits);
      console.log(`Display images state:`, this.state.images);
      console.log(`Display page state: `, this.state.page)
    })
    .catch(error => console.log(error))
  }

  onSubmit = () => {

  }


 componentDidMount() {
  this.fetchData();
 }


  render() {
    return (
      <div>
        {this.state.images.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ul key={id}>
          <li key={id}>
            <a href={largeImageURL} key={id}><img src={webformatURL} alt={tags} key={id}/></a>
            
          </li>
          </ul>
        ))}
      </div>
    )
  }
}

export default FetchImages
