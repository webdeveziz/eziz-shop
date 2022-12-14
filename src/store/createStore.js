import { combineReducers, configureStore } from '@reduxjs/toolkit'
import productsReducer from './slices-reducers/products'
import categoriesReducer from './slices-reducers/categories'
import searchReducer from './slices-reducers/search'
import cartReducer from './slices-reducers/cart'
import sortReducer from './slices-reducers/sortPrice'
import paginationReducer from './slices-reducers/pagination'
import favoriteReducer from './slices-reducers/favorite'

const rootReducer = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  search: searchReducer,
  cart: cartReducer,
  sort: sortReducer,
  pagination: paginationReducer,
  favorite: favoriteReducer,
})

function createStore() {
  return configureStore({ reducer: rootReducer })
}

export default createStore

// const store = createStore()
