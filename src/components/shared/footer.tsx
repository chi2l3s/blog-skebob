import { Button } from "../ui/button";
import { BsTelegram } from "react-icons/bs";

export function Footer() {
    return (
        <div className="flex items-center justify-between bg-muted px-8 py-4">
            <div className="flex flex-col gap-2">
                <h1>OOO "СКЕБОБ НЮВС"</h1>
                <p className="text-muted-foreground font-semibold">Email: amixolplex@gmail.com</p>
                <p className="text-muted-foreground font-semibold">Ни одно из прав не защищено</p>
                <p>ОРГН: 148867565242</p>
            </div>

            <div className="flex flex-col gap-1.5">
                <a href="#faq" className="text-blue-600 hover:text-blue-300 duration-150">Часто задаваемые вопросы</a>
                <a href="src/assets/doc/policy.pdf" className="text-blue-600 hover:text-blue-300 duration-150">Политика конфиденциальности</a>
            </div>

            <div className="flex items-center justify-center gap-2">
                <a href="https://github.com/chi2l3s" target="_blank">
                    <Button variant={"link"} size={"icon-lg"} className="cursor-pointer [&_svg]:size-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                        </svg>
                    </Button>
                </a>
                <a href="https://t.me/orisign" target="_blank">
                    <Button variant={"link"} size={"icon-lg"} className="cursor-pointer [&_svg]:size-10">
                        <BsTelegram />
                    </Button>
                </a>
            </div>
        </div>
    )
}