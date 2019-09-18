import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'

const NiceButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid tomato;
  color: tomato;
  margin: 0 1em;
  padding: 0.25em 1em;
`

function Button({ children, onClick }) {
  return (
    <NiceButton onClick={onClick}>
      {children}
    </NiceButton>
  )
}

Button.propTypes = {
  onClick: PropTypes.func
}

export default Button

