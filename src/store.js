import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createBrowserHistory as createHistory, push } from 'history'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import reducers from './reducers'

export const history = createHistory()

const middleware = routerMiddleware(history)

export const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(
    applyMiddleware(middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
