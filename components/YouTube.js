import React from 'react'

export default function YouTube({ id }) {
    return (
        <div>
            <iframe
                width="100%"
                height="450"
                src={"https://www.youtube.com/embed/" + id}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        </div>)
}
