import rewardsData from '../mock-data/rewardsData.json'

const TransactionService = {
    fetchTransactions: async () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(rewardsData)
            }, 1000)
        })
    },
}

export default TransactionService