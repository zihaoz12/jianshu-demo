import { combineReducers } from 'redux-immutable';
// import headerReducer from '../partials/Header/store/reducer';
import { reducer as headerReducer} from '../partials/Header/store';
// export default combineReducers({
//     header:headerReducer
// })
//===
const reducer = combineReducers({
    header:headerReducer
})

export default reducer;