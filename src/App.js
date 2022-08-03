import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize = 9;
  apikey = process.env.React_App_Api;
  render() {
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            exact
            path='/'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='general'
                pageSize={this.pageSize}
                category='general'
              />
            }
          />
          <Route
            exact
            path='/business'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='business'
                pageSize={this.pageSize}
                category='business'
              />
            }
          />
          <Route
            exact
            path='/entertainment'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='entertainment'
                pageSize={this.pageSize}
                category='entertainment'
              />
            }
          />
          <Route
            exact
            path='/general'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='general'
                pageSize={this.pageSize}
                category='general'
              />
            }
          />
          <Route
            exact
            path='/health'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='health'
                pageSize={this.pageSize}
                category='health'
              />
            }
          />
          <Route
            exact
            path='/science'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='science'
                pageSize={this.pageSize}
                category='science'
              />
            }
          />
          <Route
            exact
            path='/sports'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='sports'
                pageSize={this.pageSize}
                category='sports'
              />
            }
          />
          <Route
            exact
            path='/technology'
            element={
              <News
                apikey={this.apikey}
                setprogress={this.setprogress}
                key='technology'
                pageSize={this.pageSize}
                category='technology'
              />
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}

// export default App;
