import { Box } from 'native-base'
import React from 'react'

import { IExpense } from '../../../infra/models/Expense'

import { createExpense } from '../../../infra/services/expenses'
import { Expense } from '../../../dtos/Expense'

export function CreateExpense() {
  const handleCreateExpense = async () => {
   await createExpense({} as IExpense)
  }

  return (
    <Box>

    </Box>
  )
}
