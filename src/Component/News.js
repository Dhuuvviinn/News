import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
// import { PropTypes } from 'react';
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=421ffc6d1c6c4635a8ff9629bcac4116&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  pre = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=421ffc6d1c6c4635a8ff9629bcac4116&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    // console.log(parseData);
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  // ${this.props.pageSize}
  Next = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
        this.props.category
      }&apiKey=421ffc6d1c6c4635a8ff9629bcac4116&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parseData = await data.json();
      // console.log(parseData);
      this.setState({
        articles: parseData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center'>News Monkey-Top headline</h1>
        <div className='text-center'>{this.state.loading && <Spinner />}</div>

        <div className='row'>
          {this.state.articles.map((currEle) => {
            return (
              <div className='col-md-4 my-2' key={currEle.url}>
                <Newsitems
                  title={currEle.title}
                  description={currEle.description}
                  imageUrl={
                    !currEle.urlToImage
                      ? 'https://bsmedia.business-standard.com/_media/bs/img/article/2022-05/23/full/1653322199-0196.jpg'
                      : currEle.urlToImage
                  }
                  newUrl={currEle.url}
                  author={currEle.author}
                  date={currEle.publishedAt}
                />
              </div>
            );
          })}
        </div>
        <div className='d-flex justify-content-between'>
          <button
            disabled={this.state.page <= 1}
            type='button'
            className='btn btn-dark'
            onClick={this.pre}
          >
            &larr;prev
          </button>
          <button
            disabled={
              this.state.page + 1 >=
              Math.ceil(this.state.totalResults / this.state.page)
            }
            type='button'
            className='btn btn-dark'
            onClick={this.Next}
          >
            Next&rarr;
          </button>
        </div>
      </div>
    );
  }
}
