import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchPost } from "../actions";

export class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params.id //provided to us by react router
        this.props.fetchPost(id);
    }
  render() {
    return (
      <div>
        Posts Show!
      </div>
    )
  }
}

//ownProps = all the props that can be used inside component as this.props
function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.param.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostsShow)
