import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Target, Trophy, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutPage() {
    return (
        <div className="max-w-5xl mx-auto py-12 px-4 space-y-16">
            <section className="relative text-center py-10 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Badge variant="outline" className="mb-4 uppercase tracking-[0.2em] border-primary text-primary">
                        Tier-1 News Source
                    </Badge>
                    <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter">
                        Blog<span className="text-primary">Skebob</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground mt-6 max-w-xl mx-auto font-medium">
                        Твой радар в мире CS2. Аналитика матчей, трансферы, обновления Valve и сочные хайлайты в одном месте.
                    </p>
                </motion.div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-10 blur-3xl bg-primary size-64 rounded-full" />
            </section>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                    { label: "Скорость", desc: "Публикуем решаффлы быстрее, чем HLTV", icon: Zap },
                    { label: "Точность", desc: "Разбор раскидок и патчноутов до мелочей", icon: Target },
                    { label: "Турниры", desc: "Освещаем каждый Major и RMR-цикл", icon: Trophy },
                    { label: "Комьюнити", desc: "Место, где ценят мнение каждого игрока", icon: Users }
                ].map((item, i) => (
                    <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="bg-secondary/30 border-none hover:bg-secondary/50 transition-colors cursor-default">
                            <CardHeader className="pb-2">
                                <item.icon className="size-6 text-primary mb-2" />
                                <CardTitle className="text-xl font-bold uppercase italic">{item.label}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </section>

            <section className="grid md:grid-cols-2 gap-12 items-center border-y border-white/5 py-16">
                <div>
                    <h2 className="text-3xl font-bold uppercase mb-6 italic">Почему мы это делаем?</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            CS2 — это не просто игра, это дисциплина, где секунда решает всё. Мы создали **BlogSkebob**, чтобы у фанатов киберспорта был удобный и быстрый ресурс без лишнего мусора.
                        </p>
                        <p>
                            Мы следим за каждым движением на про-сцене: от замен в Team Spirit до настроек сенсы s1mple. Наша цель — стать вашим главным источником инфы перед каждым матчем.
                        </p>
                    </div>
                </div>
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://wallpapers.com')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-500" />
                    <span className="relative font-mono text-xs text-white/50 tracking-widest uppercase">Live Coverage Active</span>
                </div>
            </section>

            <section className="text-center space-y-8">
                <h3 className="text-2xl font-bold uppercase italic">Готов к следующему раунду?</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild size="lg" className="h-14 px-8 text-lg font-bold italic uppercase skew-x-[-10deg]">
                        <Link to="/blog">В ленту новостей</Link>
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-8 text-lg font-bold italic uppercase skew-x-[-10deg]">
                        Сетка турниров
                    </Button>
                </div>
            </section>
        </div>
    );
}
