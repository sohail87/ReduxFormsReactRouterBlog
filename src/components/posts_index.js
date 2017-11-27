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
    console.log(this.props.posts)
    return (
      <div>
        Posts Index
      </div>
    );
  }
}
//when you want to consume anything from application level state
function mapStateToProps(state){
  return {posts: state.posts}
}


//connect makes fetchPosts available in this.props for PostsIndex
export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
