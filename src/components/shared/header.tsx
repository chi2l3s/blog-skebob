import { Link } from "react-router-dom";
import { ModeToggle } from "./theme-toggle";

export function Header() {
    return (
        <div className={"sticky top-0 z-10 flex items-center justify-around w-full my-4"}>
            <Link to="/">
                <h1 className={"text-2xl font-bold"}>BlogSkebob</h1>
            </Link>

            <div className={"flex items-center justify-center gap-3"}>
                <Link to="/blog">Блог / Статьи</Link>
                <Link to="/categories">Категории</Link>
                <Link to="/about">Обо мне</Link>
            </div>

            <ModeToggle />
        </div>
    )
}