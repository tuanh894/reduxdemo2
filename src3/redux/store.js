import {createStore} from 'redux';

const defaultState ={
    fullname: 'Trần Tú Anh',
    grade: '12',
    address:'Mai Động',
    school:'12387',
    district:'254',
    province: '24'
};
const reducer = (state = defaultState, action) => {
    switch (action.type) {}
    return state;
};
const store = createStore(reducer);
export default store;