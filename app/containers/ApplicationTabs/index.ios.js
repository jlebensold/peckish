import { View, TabBarIOS, TabBarItemIOS } from 'react-native';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../../actions';
import Home from '../Home';
import About from '../About';

class ApplicationTabs extends Component {

  constructor(props) {
    super(props)
    this.state = { index: 0 }
  }

  onPress(index) {
    this.props.setTab(index);
  }

  renderScene(component) {
    return (
      <View style={ { flex: 1 } }>
        { React.createElement(component, this.props) }
      </View>
    );
  }

  render() {
    return (
      <TabBarIOS style={{flex: 1}} >
        <TabBarIOS.Item
          systemIcon="favorites"
          iconSize={25}
          onPress={() => { return this.onPress(0) } }
          selectedIconName="favorites"
          selected={this.props.tabs.index === 0}>
            { this.renderScene(Home) }
        </TabBarIOS.Item>
        <TabBarIOS.Item
          systemIcon="more"
          iconSize={25}
          onPress={() => { return this.onPress(1) } }
          selectedIconName="more"
          selected={this.props.tabs.index === 1}>
            { this.renderScene(About) }
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

function mapStateToProps(state) {
  return {
    tabs: state.tabs
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationTabs);
