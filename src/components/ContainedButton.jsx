import React from 'react'
import { Button } from '@mui/material'

export const ContainedButton = ({ text, onClick }) => {
  return (
    <div>
      <Button 
      variant='contained' 
      onClick={onClick}
      style={{maxWidth: '100px', maxHeight: '100px', minWidth: '150px', minHeight: '100px'}}
      sx={{whiteSpace: 'pre-line'}}>
        {text}
      </Button>
    </div>
  )
}

export default ContainedButton
