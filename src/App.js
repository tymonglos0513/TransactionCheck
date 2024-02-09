import React, { useState, useEffect } from "react"
import TransactionService from "./service/TransactionService"
import TransactionList from "./components/TransactionList"
import Loading from "./components/Loading"
import Error from "./components/Error"
import "./assets/css/main.css"

const App = () => {
  const [transactions, setTransactions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await TransactionService.fetchTransactions()
        setTransactions(data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchTransactions()
  }, [])

  return (
    <div className="app">
      <h1>Reward Points Tracker</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <TransactionList transactions={transactions} />
      )}
    </div>
  )
}

export default App