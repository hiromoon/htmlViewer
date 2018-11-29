import React from 'react'
import { Provider } from 'react-redux'
import configureStore from '../configureStore'
import Editor from './Editor'
import Preview from './Preview'

const store = configureStore({})

const Main = () => (
  <Provider store={store}>
    <div>
      <Editor />
      <Preview />
    </div>
  </Provider>
)

export default Main
