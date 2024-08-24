"use client"

import { Typewriter } from 'react-simple-typewriter'
import { MdWork } from 'react-icons/md'
import Button from './Button'

export default function Hero() {

    return (
        <main className="p-4 h-[calc(100vh-64px)] max-w-7xl mx-auto flex flex-col justify-center">
            <div className="text-indigo-400">
                <h1 className="text-4xl font-bold text-zinc-200">João Victor Novais</h1>
                <Typewriter
                    words={["Software Engineer", "Back-end Developer"]}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    
                />
            </div>
            <p className="text-sm text-zinc-400 mt-2">Passionate about solve real-life problemas with code.</p>
            <div className="flex gap-4 items-center mt-6">
                <Button color="primary">See my works</Button>
                <Button color="secundary">Contact me</Button>
            </div>
        </main>
    )
}