
import About from "./components/about";
import Cursor from "./components/cursor";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Preloader from "./components/preloader";
import Projects from "./components/projects";
import Tech from "./components/tech";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
           <Hero/>
           <About/>
           <Tech />
           <Projects/>
           <Footer />
           <Cursor/>
    </main>
  )
}
