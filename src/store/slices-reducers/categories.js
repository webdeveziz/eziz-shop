import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const catAsyncThunk = createAsyncThunk(
  'categories/catAsyncThunk',
  async function (_, { dispatch, rejectWithValue }) {
    try {
      const response = await axios.get(
        'https://fakestoreapi.com/products/categories'
      )

      if (response.data.length <= 0) {
        throw new Error('Ошибка! Сервер не отвечает!')
      }

      dispatch(set(response.data))

      return response.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = { entities: [], isLoading: true, error: null }
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
  },
  extraReducers: {
    [catAsyncThunk.pending]: (state, action) => {
      // console.log('pending')
    },
    [catAsyncThunk.fulfilled]: (state, action) => {
      // console.log('fulfilled')
    },
    [catAsyncThunk.error]: (state, action) => {
      // state.entities = []
      state.error = action.payload
    },
  },
})

const {
  actions: { set },
  reducer: categoriesReducer,
} = categoriesSlice

// export const setCategoriesThCr = () => async (dispatch) => {
//   try {
//     const data = await categoriesService.fetch()
//     dispatch(set(data))
//   } catch (error) {
//     console.log(error)
//   }
// }

export const getCategoriesSel = () => (state) => state.categories.entities

export default categoriesReducer
