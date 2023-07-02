const redux = require('redux');
const createStore = redux.createStore();
const BUY_CAKE = 'BUY CAKE';
function buyCake () {
    return( {

        type: BUY_CAKE,
        info: 'Buy cake from our store'
    });
}

const initialState = {
    numOfCakes: 10
};

const reducer = (state= initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            state : state.numOfCakes - 1
        }
        default: return{
            state
        }
    }
}

const store = createStore(reducer);
store.dispatch(buyCake());
store.subscribe(()=>console.log(("Updated state",store.getState())));


console.log(buyCake());