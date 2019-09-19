import {combineReducers} from 'redux'
import catsReducer from './cats_reducer'

const reducer = combineReducers({
    cats: catsReducer
})

export default reducer