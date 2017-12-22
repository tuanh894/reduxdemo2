
import { combineReducers} from 'redux';
import arrWordsReducer from './addWordReducer';
import filterStatusReducer from './filterStatusReducer';
import isAddingReducer from './isAddingReducer';
//combine Reducer
const reducer = combineReducers({
    arrWords: arrWordsReducer,
    filterStatus: filterStatusReducer,
    isAdding: isAddingReducer,
});

export default reducer;