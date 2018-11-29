import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import reducers from './reducers'

export default preloadState => {
  return createStore(reducers, preloadState, applyMiddleware(promiseMiddleware))
}
