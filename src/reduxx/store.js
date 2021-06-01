import { createStore} from "redux"



import {rootReducer } from  './userReducer'




const store = createStore(rootReducer);


export default store

