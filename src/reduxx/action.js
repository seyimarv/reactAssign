import { ActionTypes } from "./actionTypes"


export const getUsers = (users) => ({
    type: ActionTypes.SET_USERS,
    payload: users
})