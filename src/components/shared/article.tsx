import { BiCalendar } from "react-icons/bi";
import { Link } from 'react-router-dom'

export interface ArticleProps {
    id: number;
    title: string;
    shortDescription: string;
    src: string;
    createdAt: Date;
}

export function Article(article: ArticleProps) {
    const { title, shortDescription, src, createdAt, id } = article

    return (
        <Link to={`/article/${id}`} className="rounded-md border-border hover:scale-95 duration-200 cursor-pointer border w-[250px] px-4 py-3 h-fit flex gap-3 flex-col">
            <img alt={title} src={src} className="w-full object-cover" />

            <div className="flex flex-col gap-2 twemoji">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-muted-foreground">{shortDescription}</p>
                <div className="flex items-center justify-center">
                    <BiCalendar />
                    {createdAt.toLocaleDateString()}
                </div>
            </div>
        </Link>
    )
}