import {ActionTypes} from './actionTypes'

const INITIAL_STATE = {
    currentUsers: []
}


export const rootReducer = (state= INITIAL_STATE, action) => {
      switch(action.type) {
          case ActionTypes.SET_USERS: 
          return {
              ...state,
              currentUsers: action.payload
          }
          default:
              return state
      }
  }



