import React from "react"
import RewardCalc from "../utils/RewardCalc"

const TransactionList = ({ transactions }) => {
    const rewards = RewardCalc.calculateReward(transactions)

    return (
        <div className="transaction-list">
            <h2>Monthly Reward Points</h2>
            <table>
                <thead>
                <tr>
                    <th>Customer ID</th>
                    <th>January</th>
                    <th>February</th>
                    <th>March</th>
                    <th>Total</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(rewards).map(([customerId, monthlyRewards]) => (
                    <tr key={customerId}>
                    <td>{customerId}</td>
                    {[0, 1, 2].map(month => (
                        <td key={month}>{monthlyRewards[month] || 0}</td>
                    ))}
                    <td>
                        {Object.values(monthlyRewards).reduce((total, points) => total + points, 0)}
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TransactionList