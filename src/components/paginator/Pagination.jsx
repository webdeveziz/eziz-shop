import styles from './Pagination.module.css'
import _ from 'lodash'
import PropTypes from 'prop-types'

const Pagination = ({ itemsCount, pageSize, currentPage, onChangePage }) => {
  const countPages =
    Math.ceil(itemsCount / pageSize) <= 1
      ? null
      : Math.ceil(itemsCount / pageSize)

  const pages = _.range(1, countPages + 1)

  return (
    <nav>
      <ul className={styles.pagination}>
        {pages.map((page) => {
          return (
            <li
              className={
                styles.list + ' ' + (currentPage === page && styles.active)
              }
              key={page}
              onClick={() => onChangePage(page)}
            >
              {page}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
}

export default Pagination
