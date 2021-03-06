import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './root-reducer'

export default function (initialState) {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState
  const middleware = [thunk]

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware)
      /* window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__() */
    )
  )

  store.subscribe(() => {
    const state = store.getState()
    const persist = {
      articles: state.articles
    }

    window.localStorage.setItem('state', JSON.stringify(persist))
  })

  return store
}
