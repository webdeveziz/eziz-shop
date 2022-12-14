import styles from './SubHeader.module.css'
import heart from '../../assets/img/bookmark.png'
import cartIcon from '../../assets/img/cart.png'
import search from '../../assets/img/search.png'
import closeIcon from '../../assets/img/close.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchThCr } from '../../store/slices-reducers/search'
import { getCartSel } from '../../store/slices-reducers/cart'
import { useCallback, useRef, useState } from 'react'
import debounce from 'lodash.debounce'
import { setCurrentPageThCr } from '../../store/slices-reducers/pagination'
import { getFavoriteSel } from '../../store/slices-reducers/favorite'

const SubHeader = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const productsInCart = useSelector(getCartSel())
  const favoriteProducts = useSelector(getFavoriteSel())
  const totalCount = productsInCart.reduce(
    (acc, product) => acc + product.count,
    0
  )
  const inputRef = useRef('')

  const debounc = useCallback(
    debounce((valueInput) => {
      dispatch(setSearchThCr(valueInput))
      dispatch(setCurrentPageThCr(1))
    }, 500),
    []
  )

  const handleChange = ({ target }) => {
    debounc(target.value)
    setValue(target.value)
  }

  const handleClearInput = () => {
    dispatch(setSearchThCr(''))
    setValue('')
    inputRef.current.focus()
  }

  return (
    <div className={styles.subHeader}>
      <div className={styles.search}>
        <input
          ref={inputRef}
          value={value}
          type="text"
          placeholder="Поиск товара по названию ..."
          onChange={handleChange}
        />
        <img className={styles.searchIcon} src={search} />
        {value && (
          <img
            className={styles.closeIcon}
            src={closeIcon}
            onClick={handleClearInput}
          />
        )}
      </div>

      <div className={styles.bookmark}>
        <div className={styles.bookmarkFav}>
          <span className={styles.bookmarkFavCount}>
            {favoriteProducts?.length}
          </span>
          <Link to="bookmark">
            <img src={heart} alt="Favorite" />
          </Link>
        </div>

        <div className={styles.cartIcon}>
          <span className={styles.cartIconCount}>{totalCount}</span>
          <Link to="cart">
            <img src={cartIcon} alt="Cart icon" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SubHeader
