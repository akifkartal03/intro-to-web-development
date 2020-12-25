import * as actionTypes from "./actionTypes"
export const increase=()=>({

    type:actionTypes.INCREASE_COUNTER,
    payload:1
})
export const decreaseCounter=()=>({
    type:actionTypes.DECREASE_COUNTER,
    payload:1
})