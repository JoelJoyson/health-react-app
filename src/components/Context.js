import React from 'react';


class ContextProvider extends React.Component {
  static childContextTypes = {
    currentUser: React.PropTypes.object
  };
  getChildContext() {
    return {currentUser: this.props.currentUser};
  }
  
  render() {
    return("Context"); 
  }
}