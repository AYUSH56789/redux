// step - 2
const initialState=10
const changeNumber=(state=initialState,action)=>{
    switch (action.type) {
        case "INCREMENT": return state+action.payload;
        case "DECREMENT": return state-action.payload;
        default: return state;
    }
}

export{
    changeNumber
}