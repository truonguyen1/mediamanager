/**
 * Created by Truong on 1/21/2016.
 */
import * as types from './../constants/actiontypes.js'
export function movies(state=[],action){
    switch (action.Type){
        case types.LIST_MOVIES:
            break;
        case types.GET_MOVIES_PATH:
            chrome.mediaGalleries.addUserSelectedFolder(function(){
                debugger;
            });
            break;
        default:
            return state;

    }



}