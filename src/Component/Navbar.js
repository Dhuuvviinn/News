import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  state = {
    color: false,
  };
  changecolor = () => {
    if (this.state.color) {
      this.setState({ color: false });
    } else {
      this.setState({ color: true });
    }
  };
  render() {
    return (
      <>
        <nav
          className={`navbar navbar-expand-lg ${
            this.state.color ? 'bg-light' : 'bg-dark'
          } `}
          style={{ position: 'sticky', top: 0, right: 0, zIndex: 100 }}
        >
          <div className='container-fluid' style={{ display: 'flex' }}>
            <Link
              className={`navbar-brand ${
                this.state.color ? 'text-dark ' : 'text-white'
              }`}
              to='/'
            >
              Navbar
            </Link>
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
            <div
              className='collapse navbar-collapse'
              id='navbarSupportedContent'
            >
              <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item'>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/'
                  >
                    Home
                  </Link>
                </li>

                <li className='nav-item  '>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/business'
                  >
                    business
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/entertainment'
                  >
                    entertainment
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/general'
                  >
                    general
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/health'
                  >
                    health
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/science'
                  >
                    science
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/sports'
                  >
                    sports
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className={`navbar-brand ${
                      this.state.color ? 'text-dark ' : 'text-white'
                    }`}
                    aria-current='page'
                    to='/technology'
                  >
                    technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='form-check form-switch'>
            <input
              style={{ cursor: 'pointer' }}
              className='form-check-input'
              type='checkbox'
              role='switch'
              id='flexSwitchCheckDefault'
              onClick={this.changecolor}
            />
          </div>
        </nav>
      </>
    );
  }
}
