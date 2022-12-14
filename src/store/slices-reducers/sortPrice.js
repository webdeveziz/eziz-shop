import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: { iter: 'price', order: 'asc' },
  isLoading: true,
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = { iter: action.payload[0], order: action.payload[1] }
      state.isLoading = false
    },
  },
})

const {
  actions: { set },
  reducer: sortReducer,
} = sortSlice

// thunk creators
export const setSortThCr = (arr) => (dispatch) => {
  dispatch(set(arr))
}

// selectors
export const getSortSel = () => (state) => state.sort.entities

export default sortReducer
