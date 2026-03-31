import { Article } from "@/components/shared/article";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ARTICLES } from "@/constants";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from 'motion/react'

export function BlogPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [sortTerm, setSortTerm] = useState<"desc" | "asc">("desc")

    const filteredArticles = ARTICLES
        .filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .sort((a, b) => {
            const dateA = a.createdAt.getTime();
            const dateB = b.createdAt.getTime();
            return sortTerm === "desc" ? dateB - dateA : dateA - dateB;
        });


    return (
        <div className="flex flex-col justify-center gap-3">
            <div className="flex items-center justify-center gap-4">
                <Input className="rounded-md w-full" placeholder="Поиск по сайту" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                <Button onClick={() => setSearchQuery("")} variant={"ghost"} className="rounded-full size-12 [&_svg]:size-8"><IoClose /></Button>
                <Select defaultValue={sortTerm} onValueChange={v => setSortTerm(v as "asc" | "desc")}>
                    <SelectTrigger>
                        <SelectValue>Сортировка</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="desc">Сначала новые</SelectItem>
                        <SelectItem value="asc">Сначала старые</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <h1 className="text-2xl font-bold">Блог и статьи</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                <AnimatePresence mode="popLayout">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map(article => (
                            <motion.div
                                key={article.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 40,
                                    opacity: { duration: 0.2 }
                                }}
                            >
                                <Article {...article} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full text-center py-10 text-muted-foreground"
                        >
                            По запросу "{searchQuery}" ничего не найдено
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}