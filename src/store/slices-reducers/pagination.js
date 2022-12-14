import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: 1,
  isLoading: true,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
  },
})

const {
  actions: { set },
  reducer: paginationReducer,
} = paginationSlice

// thunk creators
export const setCurrentPageThCr = (page) => (dispatch) => {
  dispatch(set(page))
}

// selectors
export const getCurrentPageSel = () => (state) => state.pagination.entities

export default paginationReducer
