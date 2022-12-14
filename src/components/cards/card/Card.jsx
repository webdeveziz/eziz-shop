import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addCardToCartThCr } from '../../../store/slices-reducers/cart'
import { cssColor } from '../../../utils/cssUtil'
import { readMore } from '../../../utils/readMore'
import Amount from '../../amount/Amount'
import heartFull from '../../../assets/img/heartFull.png'
import heart from '../../../assets/img/heart.png'
import Payloader from '../../payloader/Payloader'
import styles from './Card.module.css'
import {
  addFavoriteElemThCr,
  deleteFavElemThCr,
} from '../../../store/slices-reducers/favorite'
import { getOneProductById } from '../../../store/slices-reducers/products'

const Card = ({ image, title, description, price, rating, id, category }) => {
  const product = {
    id,
    image,
    title,
    price,
    description,
    category,
    rating,
  }
  const [isRedHeart, setIsHeart] = useState(false)
  const [isMore, setIsMore] = useState(true)
  const dispatch = useDispatch()

  const addedSameProduct = useSelector((state) =>
    state.cart.entities.find((product) => product.id === id)
  )

  const handleIsMore = () => {
    setIsMore((prevState) => !prevState)
  }

  const handleAddProductCart = () => {
    dispatch(addCardToCartThCr(product))
  }

  const handleAddProductToFav = () => {
    dispatch(addFavoriteElemThCr(product))
    setIsHeart((prevFavorite) => !prevFavorite)
  }

  const handleDeleteFav = () => {
    dispatch(deleteFavElemThCr(id))
    setIsHeart((prevFavorite) => !prevFavorite)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.cardImg}>
          {image ? (
            <Link to={id.toString()}>
              <img src={image} />
            </Link>
          ) : (
            <Payloader />
          )}
          <div className={styles.cardRight}>
            <div className={styles.btn}>
              <button onClick={handleAddProductCart}>
                <span> + </span> Добавить{' '}
                {addedSameProduct?.count && (
                  <strong>{addedSameProduct.count}</strong>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className={styles.cardText}>
          <div className={styles.title}>{title}</div>
          <div className={styles.rate}>Rating {cssColor(rating.rate)}/5</div>
          <div className={styles.price}>
            <span className={styles.somePrice}>{price} $</span>
            <img
              onClick={isRedHeart ? handleDeleteFav : handleAddProductToFav}
              src={isRedHeart ? heartFull : heart}
              alt="Favorite"
            />
            <Amount {...{ amount: rating.count }} />
          </div>
          <div className={styles.description}>
            {readMore(description, isMore)}
            {isMore ? (
              <button onClick={handleIsMore} className={styles.readMore}>
                show more
              </button>
            ) : (
              <button onClick={handleIsMore} className={styles.readMore}>
                show less
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
