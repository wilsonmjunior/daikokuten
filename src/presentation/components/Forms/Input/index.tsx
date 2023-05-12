import { Box, Input as BNInput, IInputProps } from 'native-base'
import React from 'react'

export function Input({ size = '2xl', ...props }: IInputProps) {
  return (
    <Box>
      <BNInput
        size={size}
        {...props}
      />
    </Box>
  )
}
