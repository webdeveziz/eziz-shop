// import { useState } from 'react'
// import styles from './TextField.module.css'

const TextField = ({ label, type, name, value, onChange, error }) => {
  return (
    <div className="preference">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  )
}

TextField.defaultProps = {
  type: 'text',
}

export default TextField
