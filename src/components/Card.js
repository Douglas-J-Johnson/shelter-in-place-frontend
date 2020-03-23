import React from 'react'

export default ({activity}) => {
    console.log(activity)

    return (
        <div className='card'>
            <img src={activity.image} alt={activity.image}></img>
            <h2>{activity.name}</h2>
            <p>{activity.description}</p>
            <a href={activity.resource}>{activity.resource}</a>
        </div>
    )
}