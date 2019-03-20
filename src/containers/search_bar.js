import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { Button } from '@material-ui/core';

import { fetchCourseSearch } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };
  }

   handleQueryChange = (query) => {
     this.setState({ query });

     const trimmedQuery = query.trim();
     if (query === '') {
       this.props.history.push('/home');
     } else {
       this.props.fetchCourseSearch(trimmedQuery);
       this.props.history.push(`/search/${trimmedQuery}`);
     }
   }

   render() {
     return (
       <input className="search-bar" placeholder="Search..." onChange={e => this.handleQueryChange(e.target.value)} value={this.state.query} />
     );
   }
}

const mapStateToProps = state => (
  {

  }
);

export default withRouter(connect(mapStateToProps, { fetchCourseSearch })(SearchBar));
