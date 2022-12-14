import Slecoton from '../cards/card/slecoton'
import styles from './Payloader.module.css'

const Payloader = () => {
  return (
    <>
      <div className={styles.payload}>
        {[...new Array(6)].map((_, index) => {
          return <Slecoton key={index} />
        })}
      </div>
    </>
  )
}

export default Payloader
