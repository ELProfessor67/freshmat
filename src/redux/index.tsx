import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user'
import { useDispatch,TypedUseSelectorHook  } from 'react-redux'
import { useSelector } from 'react-redux'
import { useStore } from 'react-redux'

export const makeStore = () => {
  return configureStore({
    reducer: {
        user: userReducer
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore: () => AppStore = useStore