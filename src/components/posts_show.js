import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPost} from "../actions";

export class PostsShow extends Component {
  componentDidMount() {
    const {id} = this.props.match.params //provided to us by react router
    console.log(id)
    this.props.fetchPost(id);
  }
  render() {
    const {post} = this.props;
    if(!post){
      return <div>Loading...</div>
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    )
  }
}

//ownProps = all the props that can be used inside component as this.props
function mapStateToProps({ posts }, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchPost})(PostsShow)
