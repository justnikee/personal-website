
import About from "./components/about";
import Cursor from "./components/cursor";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NewPreloader from "./components/newPreloader";
import Preloader from "./components/preloader";
import Projects from "./components/projects";
import Tech from "./components/tech";
import Newfooter from "./components/new-footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NewPreloader/>
           <Hero title1="I'm Nikhil" title2="I Cook" title3="things for web"/>
           <About/>
           <Tech />
           <Projects/>
           <Newfooter />
           <Cursor/>
    </main>
  )
}
