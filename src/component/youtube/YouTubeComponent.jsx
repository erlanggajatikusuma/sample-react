import React from 'react'
import './YouTubeComponent.css'

const YouTubeComponent = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src='../../hikigaya_hachiman___oregairu_by_haalhady-db869jv.jpg' alt="logo"/>
    <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComponent.defaultProps = {
    time: '23.59',
    title: 'Title Here',
    desc: 'Describe here'
}
export default YouTubeComponent;