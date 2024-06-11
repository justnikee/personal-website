
import About from "./components/about";
import Cursor from "./components/cursor";
import Hero from "./components/hero";
import NewPreloader from "./components/newPreloader";
import Projects from "./components/projects";
import Slider from "./components/slider"
import Contact from "./components/contact";
import SocialSection from "./components/socials";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NewPreloader/>
           <Hero title1="I 'm Nikhil" title2="I Cook" title3="things for web"/>
           <About/>
           <Slider/>
           <Projects/>
           <Contact/>
           <SocialSection/>
           <Cursor/>
    </main>
  )
}
