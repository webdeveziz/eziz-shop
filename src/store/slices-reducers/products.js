import { createSlice } from '@reduxjs/toolkit'
import productsService from '../../services/products.service'

const initialState = { entities: [], product: null, isLoading: true }
const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    set(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    setProduct(state, action) {
      state.product = action.payload
      state.isLoading = false
    },
    selectCategory(state, action) {
      state.entities = action.payload
    },
  },
})

const {
  actions: { set, selectCategory, setProduct },
  reducer: productsReducer,
} = productsSlice

export const setProductsThCr = () => async (dispatch, getState) => {
  try {
    const data = await productsService.fetch()
    dispatch(set(data))
  } catch (error) {
    console.log(error)
  }
}

export const selectCategoryProducts = (catName) => async (dispatch) => {
  try {
    const data = await productsService.getProductsByCat(catName)
    dispatch(selectCategory(data))
  } catch (error) {
    console.log(error)
  }
}

export const getOneProductById = (idProduct) => async (dispatch) => {
  try {
    const data = await productsService.getProductById(idProduct)
    dispatch(setProduct(data))
  } catch (error) {
    console.log(error)
  }
}

export const getProductsSel = () => (state) => state.products.entities

export default productsReducer
