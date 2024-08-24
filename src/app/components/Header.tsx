import Logo from "./Logo";
import { RiGitRepositoryLine } from "react-icons/ri";

export default function Header() {
    return (
        <header className="flex justify-between items-center text-zinc-500 p-4 bg-black">
            <Logo />
            <ul className="hidden sm:flex items-center gap-4">
                <li className="hover:text-zinc-200 cursor-pointer hover:border-b-[1px] border-zinc-500"><a>Home</a></li>
                <li className="hover:text-zinc-200 cursor-pointer hover:border-b-[1px] border-zinc-500"><a>About me</a></li>
                <li className="hover:text-zinc-200 cursor-pointer hover:border-b-[1px] border-zinc-500"><a>Experiences</a></li>
                <li className="hover:text-zinc-200 cursor-pointer hover:border-b-[1px] border-zinc-500"><a>Projects</a></li>
                <li className="hover:text-zinc-200 cursor-pointer hover:border-b-[1px] border-zinc-500"><a>Skills</a></li>
            </ul>
            <RiGitRepositoryLine className="hover:text-zinc-200 cursor-pointer" size={30}/>
            
        </header>
    )
}