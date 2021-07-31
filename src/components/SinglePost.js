import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function SinglePost(){
    const[singlePost,setSinglePost]=useState(null);
    const {slug} = useParams();

    useEffect(()=>{
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage,
            body,
            "name":author->name,
            "authorImage":author->image
        }`).then((data)=>setSinglePost(data[0]))
        .catch(console.error);
    },[slug]);

    if(!singlePost) return (
        <main>
            <section className="flex items-center justify-center">
                <h1 className="text-6xl bright-accent-text">Loading.....</h1>
            </section>
        </main>
    );

    return (
        <main className="p-12">
            <article className="container mx-auto shadow-lg article-bg rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="banner-title-card bg-opacity-75 rounded p-12">
                            <h1 className="cursive bright-accent-text text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                            <div className="flex justify-center dark-accent-text">
                                <img src={urlFor(singlePost.authorImage).url()} className="w-10 h-10 rounded-full"/>
                                <p className="cursive flex items-center pl-2 text-2xl">{singlePost.name}</p>
                            </div>
                        </div>
                    </div>
                    <img src={urlFor(singlePost.mainImage).url()} alt={singlePost.title} className="banner object-fit rounded-t"/>
                </header>
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full bright-accent-text">
                    <BlockContent blocks={singlePost.body} projectId="f5u4gzrh" dataset="production"/>
                </div>
            </article>
        </main>
    )
}