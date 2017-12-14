import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
//reduxForm identical to connect 


// <Field>  just handles data management and interaction with redux
//  - i.e event handling and updating our different pieces of state
// component={}  prop needs to return JSX 
//  - that represents the acual element that is rendered on screen

// To wire up the input element JSX we return in 
//    component={this.renderTitleField}
// to the <Field> component, so it can be responsible for 
// handling any changes to the input element
 
// we use the argument (field) which is an object
// that has event handlers that need to be wired up to the jsx

// {...field.input} is fancy jsx

// it says i want all props of .input
// to be props on the element im on, 
// in this case the <input> element

// .input is an object that contains event handlers and props
// i.e. onChange event + value prop

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input className="form-control" 
          type="text" {...field.input}/>
      </div>
    );
  }
  render() {
    return (
      <form>
        <Field label="Post Title" name="title" component={this.renderField}/>
        <Field label="Tags" name="tags" component={this.renderField}/>
        <Field label="Post Content" name="content" component={this.renderField}/>
      </form>
    );
  }
}

//reduxForm is treated like 'connect' helper of react redux lib
// it takes a single argument which is a function
// the function will take some number of configuration objects
 

//form property must be unique!!! 
// - if 2 forms are being displayed redux can handle both if names are different
// otherwise the form state will be merged
export default reduxForm({form: 'PostsNewForm'})(PostsNew);
//we use the reduxForm helper to wrap the PostsNew Component
//by doing so we gave reduxForm the ability to communicate
//directly from this component to the reducer we wired up before


