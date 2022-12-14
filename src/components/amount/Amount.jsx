import styles from './Amount.module.css'
import { useState } from 'react'

const Amount = ({ amount }) => {
  const handleAmountd = () => {}

  return (
    <>
      <div className={styles.amount}>
        <span>
          Amount: <span className={styles.count}>{amount}</span>
        </span>
      </div>
    </>
  )
}

export default Amount
