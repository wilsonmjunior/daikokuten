import { useFocusEffect } from "@react-navigation/core";
import { useCallback } from "react"
import { createExpense, listFixedExpense } from "../../../infra/services/expenses"
import { HomePresentation } from "./home.presentation"

export function Home() {
  async function handleCreateExpense() {
    const expense = await createExpense({
      name: 'Teste 1',
      type: 'FIXED',
      value: 20,
    })
    console.warn('createExpense:: ', expense);
  }

  useFocusEffect(
    useCallback(() => {
      async function loadFixedExpenses() {
        const expenses = await listFixedExpense();
      }

      loadFixedExpenses();
    }, [])
  )

  return (
    <HomePresentation onCreate={handleCreateExpense} />
  )
}
