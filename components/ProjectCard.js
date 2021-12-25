import React from 'react';
import Image from 'next/image'
import Link from 'next/link'

import { storage } from '../firebase/clientApp';

export default function ProjectCard(props) {
    function imageLoader({ src, width }) {
        const relativeSrc = (src) => src.split("/").pop();
        return `https://firebasestorage.googleapis.com/v0/b/rafees-website.appspot.com/o/${relativeSrc(src)}?alt=media&`;
      }

    return (
        // <div className={"flex flex-col flex-no-shrink " + props?.title}>
        //   <div className="bg-lightp rounded-t-lg p-2">
        //     <span className="font-serif tracking-tight text-darkp text-4xl sm:text-2xl">{props?.project?.title}</span>
        //   </div>
        //   <div className="bg-white rounded-b-lg p-2">
        //     <span className="font-serif tracking-tight text-darkp text-2xl sm:text-xl">{props?.project?.subtitle}</span>
        //   </div>
        // </div>

        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
            {props.project?.thumbnail ? 
            <Image loader={imageLoader} width={400} height={400} className="" src={props.project?.thumbnail} alt="Sunset in the mountains" /> :
            <></>
            }
            {/* <Image className="w-full" src={me} alt="Sunset in the mountains" /> */}
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{props.project?.title}</div>
                <p className="text-gray-700 text-base">
                    {props.project?.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.project?.links?.map((t, i) =>{
                    return(
                        <Link key={i} href={t.url}>
                            <span className="inline-block bg-darkp rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                {t.title}
                            </span>
                        </Link>
                    )
                })}
            </div>
            <div className="px-6 pt-4 pb-2">
                {props.project?.tech?.map((t) =>{
                    return(
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{t}</span>
                    )
                })}
            </div>
        </div>
    )
}
