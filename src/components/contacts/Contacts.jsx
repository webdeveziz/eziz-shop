import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Contacts.module.css'

const Contacts = () => {
  React.useEffect(() => {
    console.log('Component did mount!')
    return function () {
      console.log('Component is "Contacts" will be unmount((( ')
    }
  }, [])

  const navigate = useNavigate()

  const navig = () => {
    navigate('/', { replace: true })
  }

  return (
    <div className={styles.contacts}>
      <h1>Our Contacts for you!</h1>
      <button onClick={navig}>Home</button>
    </div>
  )
}

export default Contacts
