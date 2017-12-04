import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions'
import _ from 'lodash'

class PostsIndex extends Component {
  //lifecycle method
  //will be called immediately after component has shown up in the DOM
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts(){
    return _.map(this.props.posts, post => {
      return(
        <li className="list-group-item" key={post.id}>
         {post.title}
        </li>
      );
    })
  }
  render() {
    //console.log(this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
       <h3>Posts</h3>
       <ul className="list-group">
         {this.renderPosts()}
       </ul>
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
