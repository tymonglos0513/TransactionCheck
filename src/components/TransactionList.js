import React from "react"
import RewardCalc from "../utils/RewardCalc"

const TransactionList = ({ transactions }) => {
    const rewards = RewardCalc.calculateReward(transactions)

    return (
        <div className="transaction-list">
            <h2>Monthly Reward Points</h2>
            {Object.entries(rewards).map(([customerId, points]) => (
            <div key={customerId} className="rewards">
                <p>Customer ID: {customerId}</p>
                <p>Rewards: {points}</p>
            </div>
            ))}
        </div>
    )
}

export default TransactionList