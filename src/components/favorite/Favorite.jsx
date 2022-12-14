import styles from './Favorite.module.css'
import heartFull from '../../assets/img/heartFull.png'
import heart from '../../assets/img/heart.png'
import { useState } from 'react'

const Favorite = () => {
  const [isRedHeart, setIsHeart] = useState(false)

  const handleFavorited = () => {
    setIsHeart((prevFavorite) => !prevFavorite)
  }

  return (
    <>
      <div className={styles.favorite}>
        asfvsda
        <img
          src={isRedHeart ? heartFull : heart}
          {...{ onClick: handleFavorited, alt: 'Favorite' }}
        />
      </div>
    </>
  )
}

export default Favorite
