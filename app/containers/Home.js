import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
import { appStyle } from '../styles';
const {
  ScrollView,
  View,
  TextInput,
  Image,
  Text,
  TouchableHighlight,
  StyleSheet,
} = ReactNative;

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = { searching: false, ingredientsInput: '' }
  }

  searchPressed() {
    this.setState({ searching: true })
    this.props.fetchRecipes(this.state.ingredientsInput).then( (res) => {
      this.setState({searching: false })
    });
  }

  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key])
  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.searchSection}>
          <TextInput style={styles.searchInput}
            returnKeyType="search"
            placeholder="Ingredients (comma delimited)"
            onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
            value={this.state.ingredientsInput}
          />
          <TouchableHighlight style={styles.searchButton} onPress={ () => this.searchPressed() }>
            <Text>Fetch Recipes</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.scrollSection} >
          {!this.state.searching && this.recipes().map((recipe) => {
            return <TouchableHighlight key={recipe.id}  style={styles.searchButton} onPress={ () => this.props.navigate({ key: 'Detail', id: recipe.id}) }>
            <View>
              <Image source={ { uri: recipe.thumbnail } } style={appStyle.resultImage} />
              <Text style={ appStyle.resultText } >{recipe.title}</Text>
            </View>
          </TouchableHighlight>
          })}
          {this.state.searching ? <Text>Searching...</Text> : null }
        </ScrollView>
      </View>
    )
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
});

function mapStateToProps(state) {
  return {
    searchedRecipes: state.searchedRecipes
  };
}

export default connect(mapStateToProps)(Home);
