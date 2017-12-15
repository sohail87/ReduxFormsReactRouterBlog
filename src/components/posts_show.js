import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPost, deletePost} from "../actions";
import {Link} from 'react-router-dom';

export class PostsShow extends Component {
  componentDidMount() {
    const {id} = this.props.match.params //provided to us by react router
    console.log(id)
    this.props.fetchPost(id);
  }
  onDeleteClick(){
    const {id} = this.props.match.params //provided to us by react router  
    this.props.deletePost(id, () => { 
      this.props.history.push('/')   
    });
  }
  render() {
    const {post} = this.props;
    if(!post){
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/">Back to home</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
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

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow)
