import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { addCardToCartThCr } from '../../store/slices-reducers/cart'
import { getOneProductById } from '../../store/slices-reducers/products'
import { cssColor } from '../../utils/cssUtil'
import Slecoton from '../cards/card/slecoton'
import styles from './Product.module.scss'

const Product = () => {
  const [added, setAdded] = useState(false)
  const { productId } = useParams()

  const { search } = useLocation()
  console.log(search)

  const dispatch = useDispatch()
  const product = useSelector((state) => state.products.product)
  const navigate = useNavigate()
  window.scrollTo(0, 0)

  useEffect(() => {
    dispatch(getOneProductById(productId))
  }, [productId])

  const onGoBack = () => {
    navigate(-1)
  }

  const handleAddProductCart = () => {
    const prod = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      rating: product.rating,
    }
    console.log(prod)
    dispatch(addCardToCartThCr(prod))
    setAdded((prev) => !prev)
  }

  if (!product) {
    return <Slecoton />
  }

  return (
    <>
      {product && (
        <div className={styles.product}>
          <div className={styles.productRow}>
            <div className={styles.productCat}>
              {
                <>
                  <Link to="/products">products</Link>/{product.category}
                </>
              }
            </div>
            <button className={styles.productBack} onClick={onGoBack}>
              {' '}
              Go back{' '}
            </button>
          </div>
          <div className={styles.productRow}>
            <div className={styles.productCol1}>
              <img className={styles.productImage} src={product.image} />
            </div>
            <div className={styles.productCol}>
              <h3 className={styles.productTitle}>{product.title}</h3>
              <span className={styles.productDesc}>{product.description}</span>
              <b className={styles.productPrice}>{product.price} $</b>
              <div className={styles.productRating}>
                <span>{cssColor(product.rating.rate)} /5</span>
                <span>Amount: {product.rating.count}</span>
              </div>
              <div className={styles.btn}>
                <button onClick={handleAddProductCart} disabled={added && true}>
                  {added ? <span>Добавлено</span> : <span> + Добавить</span>}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.productRow}>
            <span className={styles.productAlso}>See also other products:</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Product
