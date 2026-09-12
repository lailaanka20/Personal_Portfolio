import NavBar from '../components/NavBar';
import About from '../sections/About';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';

function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
    </div>
  );
}

export default Home;
