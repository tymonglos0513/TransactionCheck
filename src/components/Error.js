import React from "react"

const Error = ({ error }) => {
    return (
        <div className="error">
            <h2>Error: {error.message}</h2>
            <p>Try again</p>
        </div>
    )
}

export default Error