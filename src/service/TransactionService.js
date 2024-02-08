const TransactionService = {
    fetchTransactions: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, customerId: 11, amount: 120, date: '2024-01-01' },
                    { id: 2, customerId: 12, amount: 90, date: '2024-01-02' },
                    { id: 3, customerId: 15, amount: 60, date: '2024-01-03' },
                    { id: 4, customerId: 13, amount: 220, date: '2024-01-04' },
                    { id: 5, customerId: 19, amount: 90, date: '2024-01-05' },
                    { id: 6, customerId: 15, amount: 110, date: '2024-01-06' },
                    { id: 7, customerId: 19, amount: 150, date: '2024-01-07' },
                    { id: 8, customerId: 17, amount: 310, date: '2024-01-08' },
                    { id: 9, customerId: 14, amount: 20, date: '2024-01-09' },
                    { id: 10, customerId: 13, amount: 70, date: '2024-01-10' },
                    { id: 11, customerId: 13, amount: 320, date: '2024-01-11' },
                    { id: 12, customerId: 12, amount: 160, date: '2024-01-12' },
                ])
            }, 1000)
        })
    },
}

export default TransactionService