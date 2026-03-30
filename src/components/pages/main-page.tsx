import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export function MainPage() {
    return (
        <div>
            <img alt="Скебобчик" src="src\assets\img\skebob.webp" width={200} />

            <div className="flex flex-col space-y-5 items-center justify-center">
                <h1 className="font-black text-4xl">Частые вопросы</h1>

                <Accordion type="single" collapsible>
                    <AccordionItem value="skebob">
                        <AccordionTrigger>Кто такой скебоб?</AccordionTrigger>
                        <AccordionContent>
                            Скебоб - это интернет-мем с изображением птицы с длинным клювом, который стал популярным из-за абсурдного юмора. Само изображение появилось раньше как арт, но массово завирусился в 2025 году. Дополнительный буст популярности да про-игрок zont1x, он упоминал мем после чего он разошёлся по игровому сообществу и дальше по всему интернету
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="pricing">
                        <AccordionTrigger>Бесплатные ли наши новости?</AccordionTrigger>
                        <AccordionContent>
                            НЕТ, ни в коем случае наши новости в мире киберспорта не бесплатные, и за каждый прочитанный сивол вам облагают налогом в размере $9999999999
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="blog-interval">
                        <AccordionTrigger>Как часто выходят статьи?</AccordionTrigger>
                        <AccordionContent>
                            Наши журналисты публикуют статьи дай бог раз в 5 лет!
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}