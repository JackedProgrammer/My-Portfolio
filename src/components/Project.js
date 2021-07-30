import React,{useState,useEffect} from "react";
import sanityClient from "../client.js";


export default function Project(){
    const [projectData,setProjectData]=useState(null);

    useEffect(()=>{
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            description,
            projectType,
            link,
            tags
        }`)
        .then((data)=>setProjectData(data))
        .catch(console.error);
    },[]);

    return (
        <main className="p-12">
            <section className="container mx-auto">
                <h1 className="text-5xl bright-accent-text cursive flex justify-center">Projects</h1>
                <h2 className="text-lg dark-accent-text flex justify-center mt-2 mb-12" >All of my projects</h2>
                <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData && projectData.map((project,index)=>(
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="bright-accent-text text-3xl font-bold mb-2 hover:text-red-500">
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer">
                                {project.title}
                            </a>
                        </h3>
                        <div className="dark-accent-text text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished on</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" "}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg bright-accent-text leading-relaxed">{project.description}</p>
                            <a href={project.link} alt={project.title} target="_blank" rel="noopener noreferrer" className="fold-bold bright-accent-text underline hover:text-red-500">
                                View The Project{" "}
                                <span role="img" aria-label="right pointer">👉</span>
                            </a>
                        </div>
                    </article>
                    ))}
                </section>
            </section>
        </main>
    )
}