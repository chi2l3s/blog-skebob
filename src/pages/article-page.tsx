import { Navigate, useParams } from "react-router-dom"
import { ARTICLES } from "../constants"
import { Card, CardContent, CardHeader } from "../components/ui/card"

export function ArticlePage() {
    const { id } = useParams()

    const article = ARTICLES.find(a => a.id === Number(id))

    if (!article) {
        return <Navigate to="/404" replace />
    }

    return (
        <Card>
            <CardHeader>{article.title}</CardHeader>
            <CardContent className="flex flex-col gap-3">
                <img src={article.src} alt={article.title} width={400} className="rounded-md"/>
                <p className="text-sm text-muted-foreground flex items-center justify-start gap-1">{article.shortDescription}</p>
                <div className="text-lg">{article.text}</div>
            </CardContent>
        </Card>
    )
}