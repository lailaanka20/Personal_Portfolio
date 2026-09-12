import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import PortfolioPhoto from '../assets/Images/portfolio.png';

function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="container ">
        <div className="flex flex-col md:flex-row  justify-between mb-10">
          <div className="flex flex-col items-start justify-center mb-10">
            <h2 className="text-(--accent) text-xl font-bold mb-4">Projects</h2>
            <p className="text-lg font-bold max-w-lg mb-6">
              A showcase of my UI/UX and frontend work, designed in Figma and
              built with React.
              <span className="inline-block text-xs font-medium my-3">
                Each project highlights my ability to create visually appealing
                and technically solid interfaces, demonstrating my skills in
                both design and development.
              </span>
            </p>
          </div>
          <div className="flex justify-end items-center gap-1 text-(--text-secondary)">
            <Link to="/projects">View All Projects</Link>
            <FaLongArrowAltRight />
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <ProjectCard
            title="Portfolio Project"
            tag="Live"
            tagVar="live"
            description="Designed in Figma and built with React.
        A showcase of my UI/UX and frontend work."
            imageUrl={PortfolioPhoto}
            tags={['React', 'Figma', 'UX Research', 'LLM App Development']}
          />
          <ProjectCard
            title="Portfolio Project"
            tag="Live"
            tagVar="wip"
            description="Designed in Figma and built with React.
     A showcase of my UI/UX and frontend workA showcase of my UI/UX and frontend work."
            imageUrl={PortfolioPhoto}
            tags={['React', 'Figma', 'UX Research', 'LLM App Development']}
            liveLink="https://example.com"
            repoLink="https://github.com/example/portfolio"
          />
          <ProjectCard
            title="Portfolio Project"
            tag="category"
            tagVar="category"
            description="Designed in Figma and built with React.
        A showcase of my UI/UX and frontend work."
            imageUrl={PortfolioPhoto}
            tags={['React', 'Figma', 'UX Research', 'LLM App Development']}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
