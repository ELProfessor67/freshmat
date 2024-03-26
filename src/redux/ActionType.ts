import { UserType } from "@/types";
import { createAction } from "@reduxjs/toolkit"

// export interface UserType {
//     name: string,
//     email: string,
//     address: string[],
//     role: "admin" | "user"
// }

interface payloadType {
    message?: string | null,
    user?: UserType
}

export const userLoginReq = createAction('user/login/req')
export const userLoginSuc = createAction<payloadType>('user/login/suc')
export const userLoginFai = createAction<payloadType>('user/login/fai');



export const userRegisterReq = createAction('user/register/req')
export const userRegisterSuc = createAction<payloadType>('user/register/suc')
export const userRegisterFai = createAction<payloadType>('user/register/fai');

export const userLoadReq = createAction('user/load/req')
export const userLoadSuc = createAction<payloadType>('user/load/suc')
export const userLoadFai = createAction<payloadType>('user/load/fai');

export const clearMessage = createAction('clear/message')
export const clearError = createAction('clear/error')