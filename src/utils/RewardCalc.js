const RewardCalc = {
    calculateReward: (transactions) => {
        const rewards = {}
        transactions.forEach((transaction) => {
            const { customerId, amount, date } = transaction
            const month = new Date(date).getMonth()
            const points = RewardCalc.calculatePoints(amount)

            if (!rewards[customerId]) {
                rewards[customerId] = {}
            }
            if (!rewards[customerId][month]) {
                rewards[customerId][month] = 0
            }
            rewards[customerId][month] += points
        })
        return rewards
    },

    calculatePoints: (amount) => {
        let points = 0
        if (amount > 100) {
            points += (amount - 100) * 2 + 50
        } else if (amount > 50) {
            points += amount - 50
        }
        return points
    }
}

export default RewardCalc