const RewardCalc = {
    calculateReward: (transactions) => {
        const rewards = {}
        transactions.forEach((transaction) => {
            const { amount } = transaction
            let points = 0
            if (amount > 100)
                points += (amount - 100) * 2 + 50
            else if (amount > 50)
                points += amount - 50
            const customerId = transaction.customerId
            if(!rewards[customerId])
                rewards[customerId] = 0
            rewards[customerId] += points
        })
        return rewards
    }
}

export default RewardCalc