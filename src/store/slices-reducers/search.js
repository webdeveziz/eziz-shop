import { createSlice } from '@reduxjs/toolkit'

const initialState = { entities: '', isLoading: true }

const searchSlice = createSlice({
  name: 'search',
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
  reducer: searchReducer,
} = searchSlice

export const setSearchThCr = (str) => (dispatch) => {
  dispatch(set(str))
  // try {
  //   const data = await searchService.fetch()
  //   dispatch(set(data))
  // } catch (error) {
  //   console.log(error)
  // }
}

export const getsearchSel = () => (state) => state.search.entities

export default searchReducer
