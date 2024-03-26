import { createAction, createReducer } from '@reduxjs/toolkit'
import { clearError, clearMessage, userLoadFai, userLoadReq, userLoadSuc, userLoginFai, userLoginReq, userLoginSuc, userRegisterFai, userRegisterReq, userRegisterSuc } from '../ActionType'
import { UserType } from '@/types'



// export interface UserType {
//   name: string,
//   email: string,
//   address: string[],
//   role: "admin" | "user"
// }

interface initialStateType {
    loading: boolean,
    user: UserType | null,
    isAuth: undefined | boolean,
    message: null | string,
    error: null | string
}



const initialState = { 
    loading: false,
    isAuth: undefined,
    user: null,
    message: null,
    error: null
 } satisfies initialStateType as initialStateType

const userReducer = createReducer(initialState, (builder) => {
  // login 
  builder.addCase(userLoginReq,(state) => {
    state.loading = true;
  })
  builder.addCase(userLoginSuc,(state,action) => {
    state.loading = false;
    if(action.payload?.message){
        state.message = action.payload.message;
    }
    if(action.payload.user){
        state.user = action.payload.user;
    }
    state.isAuth = true;
  })
  builder.addCase(userLoginFai,(state,action) => {
    state.loading = false;
    if(action.payload?.message){
        state.error = action.payload.message;
    }
    state.isAuth = false;
  })


  // register 
  builder.addCase(userRegisterReq,(state) => {
    state.loading = true;
  })
 
  builder.addCase(userRegisterSuc,(state,action) => {
    state.loading = false;
    if(action.payload?.message){
        state.message = action.payload.message;
    }
    if(action.payload?.user){
        state.user = action.payload.user;
    }
    state.isAuth = true;
  })
  builder.addCase(userRegisterFai,(state,action) => {
    state.loading = false;
    if(action.payload?.message){
        state.error = action.payload.message;
    }
    state.isAuth = false;
  })

   // load 
   builder.addCase(userLoadReq,(state) => {
    state.loading = true;
  })
 
  builder.addCase(userLoadSuc,(state,action) => {
    state.loading = false;
    if(action.payload?.user){
        state.user = action.payload.user;
    }
    state.isAuth = true;
  })
  builder.addCase(userLoadFai,(state,action) => {
    state.loading = false;
    if(action.payload?.message){
        state.error = action.payload.message;
    }
    state.isAuth = false;
  })

  // messages 
  builder.addCase(clearMessage,(state,) => {
    state.message = null;
  })
  builder.addCase(clearError,(state) => {
    state.error = null;
  })
})

export default userReducer;