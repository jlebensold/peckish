import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home';
import ApplicationTabs from './ApplicationTabs';

class AppContainer extends Component {
  render() {
    return <ApplicationTabs {...this.props} />
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}
export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);
