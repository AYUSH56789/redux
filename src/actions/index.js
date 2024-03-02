// step -1
const incAction=(num=1)=>{
    return {
        type:"INCREMENT",
        payload:num
    }
}
const decAction=(num=1)=>{
    return {
        type:"DECREMENT",
        payload:num
    }
}

export{
    incAction,
    decAction,
}