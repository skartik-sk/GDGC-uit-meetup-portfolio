import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import portfolioData from "./data/portfolio.json";
import { theme } from "./config/theme";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: theme.colors.backgroundLight,
        fontFamily: theme.fonts.display,
      }}
    >
      <Header
        navigation={portfolioData.navigation}
        name={portfolioData.personal.name}
      />

      <main>
        <Hero personal={portfolioData.personal} />
        <About personal={portfolioData.personal} />
        <Skills skills={portfolioData.skills} />
        <Projects projects={portfolioData.projects} />
        <Testimonials testimonials={portfolioData.testimonials} />
        <Contact
          contact={portfolioData.contact}
          personal={portfolioData.personal}
          social={portfolioData.social}
        />
      </main>

      <Footer footer={portfolioData.footer} />
    </div>
  );
}

export default App;
