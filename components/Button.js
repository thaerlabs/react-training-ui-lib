import React from 'react'
import PropTypes from 'prop-types'

function Button({ children, onClick }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button

