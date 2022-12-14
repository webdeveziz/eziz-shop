import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSortThCr } from '../../store/slices-reducers/sortPrice'
import styles from './Products.module.css'

const SortPrice = () => {
  const dispatch = useDispatch()
  const [isToggle, setIsToggle] = useState(false)
  const sortRef = useRef()

  const handleSort = (arr) => {
    dispatch(setSortThCr(arr))
    setIsToggle((prev) => !prev)
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (!e.path.includes(sortRef.current)) {
        setIsToggle(false)
      }
    }

    document.body.addEventListener('click', handleClick)

    return () => {
      document.body.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div className={styles.sort}>
      <div
        className={styles.sortOption + ' ' + (!isToggle ? styles.no : '')}
        ref={sortRef}
      >
        <span
          className={styles.sortList + ' ' + (isToggle ? styles.displayN : '')}
          onClick={() => setIsToggle((prev) => !prev)}
        >
          Сортировка товаров (по стоимости)
        </span>
        <div
          className={styles.sortOpt + ' ' + (!isToggle ? styles.displayN : '')}
        >
          <span
            className={styles.sortList}
            onClick={() => handleSort(['price', 'asc'])}
          >
            По возрастанию
          </span>
          <span
            className={styles.sortList}
            onClick={() => handleSort(['price', 'desc'])}
          >
            По убыванию
          </span>
        </div>
      </div>
    </div>
  )
}

export default SortPrice
