import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';


class PostsNew extends Component {
  render() {
    return (
      <form>
        <Field 
          name="title"
          component={}
        />
      </form>
    );
  }
}

//form property must be unique!!!
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
