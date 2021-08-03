import React,{useEffect,useState} from "react";
import sanityClient from '../client.js';
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About(){
    const [author,setAuthor]=useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type=="author"]{
            name,
            bio,
            "authorImage":image.asset->url
        }`).then((data)=>setAuthor(data[0]))
        .catch(console.error);
    },[]);

    if(!author) return (
        <main>
            <section className="flex items-center justify-center">
                <h1 className="text-6xl bright-accent-text">Loading.....</h1>
            </section>
        </main>
    );

    return (
        <main>
            <div className="p-10 lg:pt-24 container mx-auto">
                <section className="bg-grey-600 rounded-lg shadow-2xl lg:flex p-12 lg:20">
                    <img src={urlFor(author.authorImage).url()} className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8" alt={author.name} />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="cursive text-6xl bright-accent-text mb-4">
                            Hi, my name is{" "}
                            <span className="bright-accent-text">{author.name}</span>
                        </h1>
                        <div className="prose lg:prose-xl bright-accent-text">
                            <BlockContent blocks={author.bio} projectId="f5u4gzrh" dataset="production"/>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}