import React from 'react'

import { CustomButton } from './Button.styles'

const Button: React.FC = () => {
  const handleClick = () => {
    console.log('Hello :)')
  }

  return <CustomButton onClick={handleClick}>Button</CustomButton>
}

export default Button
