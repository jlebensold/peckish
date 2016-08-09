import * as types from './types'
import ReactNative from 'react-native'
const { NavigationExperimental } =  ReactNative
const { jumpToIndex } = NavigationExperimental.StateUtils;

export function setTab(tabIndex) {
  return (dispatch, getState) => {
    const { tabs } = getState()
    dispatch(Object.assign({ type: types.SET_TAB }, jumpToIndex(tabs, tabIndex)));
  }
}

export function navigate(action) {
  return (dispatch, getState) => {
    dispatch(navigateForward(action))
  }
}

function navigateForward(state) {
  return {
    type: types.NAVIGATION_FORWARD,
    state
  }
}

export function navigateBack() {
  return (dispatch, getState) => {
    dispatch({
      type: types.NAVIGATION_BACK
    })
  }
}

