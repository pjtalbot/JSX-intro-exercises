import React from "react"

const Tweet = (props) => {
    return (
        <div className="Tweet">
            <span>{props.username}</span>
            <span>{props.name}</span>
            <span>{props.date}</span>
            <p>{props.message}</p>
            
        </div>
    )
}

export default  Tweet 