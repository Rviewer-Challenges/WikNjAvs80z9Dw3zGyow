import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  courses: [],
  educators: [],
  listShown: '',
  course: {},
  educator: {},
  ratings: {
    id: '',
    list: []
  },
}

export const slice = createSlice({
  name: 'slice',
  initialState,
  reducers: {
    set: (state, { payload }) => {
      const { data, type} = payload
      state[type] = [ ...data ]
    },
    setListShown: (state, { payload }) => {
      state.listShown = payload
    },
    setElement: (state, { payload }) => {
      const { data, type} = payload
      state[type] = { ...data }
    },
    addRaitng: (state, { payload }) => {
      state.ratings.list = [payload, ...state.ratings.list]
    }
  },
})

// Action creators are generated for each case reducer function
export const { set, setListShown, setElement, addRaitng } = slice.actions

export default slice.reducer