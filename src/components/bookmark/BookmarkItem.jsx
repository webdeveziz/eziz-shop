import styles from './Bookmark.module.scss'
import Amount from '../amount/Amount'
import { readMore } from '../../utils/readMore'
import { useState } from 'react'
import { addCardToCartThCr } from '../../store/slices-reducers/cart'
import { useDispatch } from 'react-redux'
import { deleteFavElemThCr } from '../../store/slices-reducers/favorite'

const BookmarkItem = ({
  id,
  title,
  image,
  price,
  description,
  rating,
  category,
}) => {
  const [isMore, setIsMore] = useState(true)
  const dispatch = useDispatch()

  const handleIsMore = () => {
    setIsMore((prevState) => !prevState)
  }

  const handleAddProductCart = () => {
    const product = {
      id,
      image,
      title,
      price,
      description,
      category,
      rating,
    }
    dispatch(addCardToCartThCr(product))
  }

  const handleDeleteFav = (id) => {
    dispatch(deleteFavElemThCr(id))
  }

  return (
    <div className={styles.bookmarkCol}>
      <button className={styles.delete} onClick={() => handleDeleteFav(id)}>
        x
      </button>
      <img src={image} />
      <h3>{title}</h3>
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
      <div className={styles.btn}>
        <button onClick={handleAddProductCart}>
          <span> + </span> Добавить
        </button>
      </div>
      <div className={styles.price}>
        <span className={styles.somePrice}>{price} $</span>
        <Amount {...{ amount: rating.count }} />
      </div>
    </div>
  )
}

export default BookmarkItem
