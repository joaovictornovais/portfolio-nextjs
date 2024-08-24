interface ButtonProps {
    children: string
    color: string
}

export default function Button({ children, color } : ButtonProps) {
    return (
        <button className={color == "primary" ? 
            "rounded-[.4rem] bg-zinc-900/70 px-4 py-1 text-sm border border-zinc-600 text-zinc-300 cursor-pointer hover:brightness-125 transition-all" : 
            "rounded-[.4rem] bg-zinc-900/70 px-4 py-1 text-sm border border-zinc-800 text-zinc-500 cursor-pointer hover:brightness-200 transition-all"
            }>
            {children}
        </button>
    )
}