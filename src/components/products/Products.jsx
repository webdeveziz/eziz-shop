import { Outlet } from 'react-router-dom'
import Cards from '../cards/Cards'
import styles from './Products.module.css'
import SortPrice from './SortPrice'

const Products = () => {
  return (
    <>
      <div className={styles.main}>
        <Outlet />
        <SortPrice />
        <Cards />
      </div>
    </>
  )
}

export default Products
