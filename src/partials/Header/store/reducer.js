import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable';

// make object immutable
const defaultState = fromJS({ 
    focused:false
})

export default (state = defaultState,action ) =>{
    if(action.type === actionTypes.SEARCH_FOCUS){
        //set() return a new object.
        return state.set('focused',true)
        // return{
        //     focused:true
        // }
    }
    if(action.type === actionTypes.SEARCH_BLUR){
        return state.set('focused',false)
        // return{
        //     focused:false
        // }
    }
    return state;
}