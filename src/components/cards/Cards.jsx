import Card from './card/Card'
import s from './Cards.module.css'
import Pagination from '../paginator/Pagination'
import { paginate } from '../../utils/paginate'
import _ from 'lodash'
import Payloader from '../payloader/Payloader'
import { useDispatch, useSelector } from 'react-redux'
import { getsearchSel } from '../../store/slices-reducers/search'
import { getSortSel } from '../../store/slices-reducers/sortPrice'
import {
  getCurrentPageSel,
  setCurrentPageThCr,
} from '../../store/slices-reducers/pagination'
import {
  getProductsSel,
  setProductsThCr,
} from '../../store/slices-reducers/products'
import { useEffect } from 'react'

const Cards = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setProductsThCr())
  }, [])

  const products = useSelector(getProductsSel())
  const currentPage = useSelector(getCurrentPageSel())

  const sortBy = useSelector(getSortSel())

  const searchElem = useSelector(getsearchSel())

  const handleChangePage = (page) => {
    dispatch(setCurrentPageThCr(page))
  }

  const pageSize = 10
  const sortProducts = _.orderBy(products, [sortBy.iter], [sortBy.order])

  const searchElems = sortProducts.filter((product) => {
    if (product.title.toLowerCase().includes(searchElem.toLowerCase()))
      return true
    else return false
  })

  const productsCrop = paginate(searchElems, currentPage, pageSize)

  return (
    <>
      {productsCrop.length > 0 ? (
        <>
          <div className={s.cards}>
            {productsCrop.map((card) => {
              return <Card key={card.id} {...card} />
            })}
          </div>
          <Pagination
            itemsCount={products.length}
            pageSize={pageSize}
            onChangePage={handleChangePage}
            currentPage={currentPage}
          />
        </>
      ) : (
        <Payloader />
      )}
    </>
  )
}

export default Cards
