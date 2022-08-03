import React, { Component } from 'react';
import Newsitems from './Newsitems';
import Spinner from './Spinner';
// import { PropTypes } from 'react';
import LoadingBar from 'react-top-loading-bar';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  async componentDidMount() {
    document.title = ` ${this.capitalizeFirst(
      this.props.category
    )} - NewsMonkey `;
    this.updateNews();
  }
  state = {
    progress: 0,
  };

  async updateNews() {
    this.setState({ progress: 10 });

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);

    let parseData = await data.json();
    console.log(parseData);
    this.setState({ progress: 40 });

    this.setState({
      articles: parseData.articles,
    });
    this.setState({ progress: 100 });
  }
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      this.props.category
    }&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ loading: true });
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      page: this.state.page + 1,
      // totalResults: parseData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <LoadingBar color='#f11946' progress={this.state.progress} />
        <h1 className='text-center'>News Monkey-Top headline</h1>
        {/* <div className='text-center'>{this.state.loading && <Spinner />}</div> */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            <div className='text-center'>
              {this.state.loading && <Spinner />}
            </div>
          }
        >
          <div className='container my-3'>
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
          </div>
        </InfiniteScroll>

        {/* <div className='d-flex justify-content-between'>
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
        </div> */}
      </div>
    );
  }
}
