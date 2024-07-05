// app/page.tsx
import Hero from "@/components/Hero";
import Influencers from "@/components/Influencers";
import Aboutus from "@/components/Aboutus";
import Contactus from "@/components/Contactus";

export default function Home() {
  return (
    <main>
      <section id="creators">
        <Hero />
      </section>
      <section id="features">
        <Influencers />
      </section>
      <section id="pricing">
        <Aboutus />
      </section>
      <section id="contact">
        <Contactus />
      </section>
      <section id="SearchAi">
        {/* Add your SearchAi component here */}
      </section>
    </main>
  );
}