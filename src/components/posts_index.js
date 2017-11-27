import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

class PostsIndex extends Component {
  //lifecycle method
  //will be called immediately after component has shown up in the DOM
    componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

//connect makes fetchPosts available in this.props for PostsIndex
export default connect(null, {fetchPosts})(PostsIndex);
