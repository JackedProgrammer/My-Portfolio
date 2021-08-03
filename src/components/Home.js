import React from "react";

export default function Home(){
    return (
        <main className="bg-main">
            <section className="flex flex-col justify-center main-text-display">
                <h1 className="flex bright-accent-text text-6xl font-bold cursive leading-none justify-center lg:leading-snug home-name">Welcome, I'm Richard.</h1>
                <h2 className="flex dark-accent-text text-3xl cursive leading-none justify-center lg:leading-snug">Developer/System Administrator</h2>
            </section>
        </main>
    )
}