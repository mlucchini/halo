import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { fetchCityWeather } from './actions'
import weather from './reducers'
import App from './App'

const store = createStore(weather, applyMiddleware(thunkMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(fetchCityWeather('London'))
