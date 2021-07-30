import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post(){
    const [postData,setPost]=useState(null);

    useEffect(()=>{
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`)
            .then((data)=>setPost(data))
            .catch(console.error);
    },[]);

    return (
        <main className="bg-main p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl flex justify-center cursive bright-accent-text">Blog</h1>
                <h2 className="text-lg dark-accent-text flex justify-center mt-2 mb-12">Here is where you'll find some articles, tutorials, and more!</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {postData && postData.map((post,index)=>(
                        <article>
                            <Link to={"/post/"+post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative shadow leading-snug blog-card" key={index}>
                                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="w-90 h-90 rounded-r object-cover absolute"/>
                                <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="bright-accent-text font-blog px-3 py-4 blog-card-title">{post.title}</h3>
                                </span>
                            </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}