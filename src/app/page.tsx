import Hero from "@/app/components/sections/Hero";
import Rooms from "@/app/components/sections/Rooms";
import About from "@/app/components/sections/About";
import Contact from "@/app/components/sections/Contact";
import FAQ from "@/app/components/sections/FAQ";
import Amenities from "@/app/components/sections/Amenities";
import Diving from "@/app/components/sections/Diving";
import ThingsToDo from "@/app/components/sections/ThingsToDo";

export default function Home() {
  return (
    <main>      
      <section id="home">
        <Hero />
      </section>
      
      <section id="about">
        <About />
      </section>

      <section id="things-to-do">
        <ThingsToDo />
      </section>

      <section id="diving">
        <Diving />
      </section>
      
      <section id="rooms">
        <Rooms />
      </section>

      <section id="amenities">
        <Amenities />
      </section>

      <section id="faq">
        <FAQ />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}