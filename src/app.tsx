import { Route, Routes } from "react-router-dom";
import { Header } from "./components/shared/header";
import { ThemeProvider } from "./components/shared/theme-provider";
import { Footer } from "./components/shared/footer";
import { TwemojiProvider } from "./components/shared/twemoji-provider";
import { AboutPage, ArticlePage, BlogPage, MainPage } from "./pages";

export function App() {
  return (
    <TwemojiProvider>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="min-h-screen flex flex-col overflow-hidden">
          <Header />
          <div className="px-6 md:px-12 lg:px-24 flex-1">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/blog" element={<BlogPage />}/>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="/article/:id" element={<ArticlePage />}/>
            </Routes></div>
          <Footer />
        </div>
      </ThemeProvider>
    </TwemojiProvider>
  )
}
