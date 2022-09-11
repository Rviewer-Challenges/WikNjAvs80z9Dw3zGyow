import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/redux/reducer'

export const store = configureStore({
  reducer
})