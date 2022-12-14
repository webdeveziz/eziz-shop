import { useDispatch, useSelector } from 'react-redux'
import { addPlusMinusThCr } from '../../store/slices-reducers/cart'
import styles from './Cart.module.css'

const Cart = ({ id, title, image, price, onDelete, count }) => {
  const dispatch = useDispatch()

  const addedSameProduct = useSelector((state) =>
    state.cart.entities.find((product) => product.id === id)
  )

  const incDecCountCarts = (payload) => {
    dispatch(addPlusMinusThCr(payload))
  }

  return (
    <div className={styles.cartRow}>
      <div className={styles.block}>
        <img src={image} />
        <div className={styles.cartSmall}>
          <span className={styles.cartTitle}>{title}</span>
          <span className={styles.cartId}>
            Код товара: <strong>{id}</strong>
          </span>
        </div>
      </div>
      <div className={styles.cartV}>
        <button onClick={() => incDecCountCarts({ id, isInc: false })}>
          -
        </button>
        <span> {addedSameProduct?.count} </span>
        <button onClick={() => incDecCountCarts({ id, isInc: true })}>+</button>
      </div>
      <div className={styles.cartPrice}>
        <span>{(price * count).toFixed(2)} </span>
        <b>$</b>
      </div>
      <button className={styles.delete} onClick={() => onDelete(id)}>
        x
      </button>
    </div>
  )
}

export default Cart
