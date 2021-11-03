import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './product/reducer';
import logger from 'redux-logger'
const rootReducer = combineReducers({
    product:productReducer
})

const middlewares = [thunk,logger]

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middlewares)))
export type RootState = ReturnType<typeof rootReducer>
export default store;