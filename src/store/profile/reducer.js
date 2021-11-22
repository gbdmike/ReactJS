import {ProfileAction} from "./types";

const initialState = {
    showProfile: false,
    name: 'Default'
}

export const ProfileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ProfileAction:
            return {...state, showProfile: !state.showProfile}
        default:
            return state
    } 
}