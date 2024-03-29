import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard(props) {
    function imageLoader({ src, width }) {
        const relativeSrc = (src) => src.split("/").pop();
        return `https://firebasestorage.googleapis.com/v0/b/rafees-website.appspot.com/o/${relativeSrc(src)}?alt=media&`;
    }

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto bg-white">
            {props.project?.thumbnail ?
                <Image loader={imageLoader} width={400} height={400} className="" src={props.project?.thumbnail} alt="Sunset in the mountains" /> :
                <></>
            }
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.project?.title}</div>
                <p className="text-gray-700 text-base">
                    {props.project?.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.project?.links?.map((t, i) => {
                    return (
                        (<Link
                            key={i}
                            href={t.url}
                            className="inline-block hover:bg-gray-700 hover:text-white bg-darkp rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">

                            {t.title}

                        </Link>)
                    );
                })}
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.project?.tech?.map((t, i) => {
                    return (
                        <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{t}</span>
                    )
                })}
            </div>
        </div>
    );
}
