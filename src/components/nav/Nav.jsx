import { upperCase } from '../../utils/upperCase'
import MainMenu from '../mainMenu/MainMenu'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  catAsyncThunk,
  getCategoriesSel,
} from '../../store/slices-reducers/categories'
import { selectCategoryProducts } from '../../store/slices-reducers/products'
import { useLocation } from 'react-router-dom'
import adv from '../../assets/img/adv.png'
import styles from './Nav.module.css'

const Nav = () => {
  const { pathname } = useLocation()

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(catAsyncThunk())
  }, [])

  const [currentCategory, setCurrentCategory] = useState()
  const categories = useSelector(getCategoriesSel())
  const error = useSelector((state) => state.categories.error)

  const handleSelectCategory = (cat) => {
    setCurrentCategory(cat)
    dispatch(selectCategoryProducts(cat))
  }

  return (
    <div className={styles.nav}>
      <MainMenu />
      <hr />
      {categories && (pathname === '/products' || pathname === '/') ? (
        <div className={styles.cat}>
          <div className={styles.catTitle}>Категории товаров</div>
          <ul className={styles.catList}>
            {categories.map((category) => {
              return (
                <li
                  key={category}
                  onClick={() => handleSelectCategory(category)}
                  className={
                    styles.catItem +
                    ' ' +
                    (category === currentCategory ? styles.active : '')
                  }
                >
                  {upperCase(category)}
                </li>
              )
            })}
          </ul>
        </div>
      ) : (
        <div className={styles.adv}>
          <img src={adv} alt="Adv" />
        </div>
      )}
      {error && <h2>{error}</h2>}
    </div>
  )
}

Nav.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  onSelectCategory: PropTypes.func,
  currentCategory: PropTypes.string,
}

export default Nav
