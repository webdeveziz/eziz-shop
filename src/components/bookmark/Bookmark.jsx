import styles from './Bookmark.module.scss'
import valentine from '../../assets/img/valentine.png'
import { Link } from 'react-router-dom'
import BookmarkItem from './BookmarkItem'
import { useSelector } from 'react-redux'
import { getFavoriteSel } from '../../store/slices-reducers/favorite'

const Bookmark = () => {
  const favoriteProducts = useSelector(getFavoriteSel())

  return (
    <div className={styles.root}>
      <div className={styles.subRoot}>
        <div className={styles.leftBlock}>
          <h1>Любимый продукт </h1>
          <div className={styles.fav}>
            <span>
              Любимый продукт — это выбранный вами товар, который будет доступен
              со скидкой 20% в течение недели.
            </span>
            <Link to="/products">За покупками</Link>
          </div>
          <h3>Как получать скидку 20%?</h3>
        </div>
        <div className={styles.rightBlock}>
          <img src={valentine} alt="favorite" />
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.bookmarkRow}>
          {favoriteProducts.map((item) => {
            return <BookmarkItem key={item.id} {...item} />
          })}
        </div>
      </div>
      <footer></footer>
    </div>
  )
}

export default Bookmark
