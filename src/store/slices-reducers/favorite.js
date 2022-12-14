import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: [],
  isLoading: true,
}

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    add(state, action) {
      const tempArr = []
      const newState = [...state.entities, action.payload]
      for (let i = 0; i < newState.length; i++) {
        const product = newState[i]
        if (tempArr.some((prod) => prod.id === product.id)) {
          continue
        } else {
          tempArr.push(product)
        }
      }
      state.entities = tempArr
    },
    deleted(state, action) {
      state.entities = state.entities.filter(
        (prod) => prod.id !== action.payload
      )
    },
  },
})

const {
  actions: { add, deleted },
  reducer: favoriteReducer,
} = favoriteSlice

// thunk creators
export const addFavoriteElemThCr = (product) => (dispatch) => {
  dispatch(add(product))
}

export const deleteFavElemThCr = (id) => (dispatch) => {
  dispatch(deleted(id))
}

// selectors
export const getFavoriteSel = () => (state) => state.favorite.entities

export default favoriteReducer
