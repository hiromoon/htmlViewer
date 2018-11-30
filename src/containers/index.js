import React from 'react'
import { Provider, connect } from 'react-redux'
import configureStore from '../configureStore'
import AppComponent from '../components'

const store = configureStore({})
const mapStateToProps = state => ({})
const App = connect(mapStateToProps)(AppComponent)

const Main = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default Main
