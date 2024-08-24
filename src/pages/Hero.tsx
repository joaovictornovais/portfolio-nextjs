"use client"

import { Typewriter } from 'react-simple-typewriter'
import { MdWork } from 'react-icons/md'
import Button from '../app/components/Button'

export default function Hero() {

    return (
        <main className="p-4 h-[calc(100vh-64px)] flex flex-col justify-center">
            <div className="text-zinc-400 sm:text-2xl md:text-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-200">João Victor Novais</h1>
                <Typewriter
                    words={["Software Engineer", "Back-end Developer"]}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    
                />
            </div>
            <p className="text-sm sm:text-md md:text-xl text-zinc-400 mt-6">Passionate about solving real-life problems with code.</p>
            <div className="flex gap-4 items-center mt-4">
                <Button color="primary">See my works</Button>
                <Button color="secundary">Contact me</Button>
            </div>
        </main>
    )
}