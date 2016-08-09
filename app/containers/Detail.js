import React, { Component } from 'react'
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { bindActionCreators } from 'redux';
import {
  View,
  Image,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native'

class Detail extends Component {

  recipe() {
    return this.props.searchedRecipes[this.props.navigationParams.id] || null;
  }

  render() {
    const recipe = this.recipe();
    if (!recipe) { return null }
    return <View>
      <TouchableHighlight style={ { flex: 1, paddingVertical: 20, backgroundColor: '#222' } } onPress={ () => { this.props.navigateBack() } }>
        <Text style={{ color: '#FFF' } }>Go Back</Text>
      </TouchableHighlight>
      <View>
        <Image source={ { uri: recipe.thumbnail } } style={styles.resultImage} />
        <Text style={ styles.resultText } >{recipe.title}</Text>
        <Text style={ { fontSize: 21 } } >{recipe.ingredients}</Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20
  },
  searchSection: {
    height: 30,
    flexDirection: 'row',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
  },
  scrollSection: {
    flex: 0.8
  },
  searchButton: {
    flex: 0.3,
  },
  searchInput: {
    flex: 0.7,
  },
  resultText: {
    backgroundColor: '#000',
    color: '#FFF',
    height: 20,
  },
  resultImage: {
    height: 150,
  }
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes,
    navigationParams: state.navigationParams,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
