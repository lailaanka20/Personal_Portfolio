import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

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
        <div className="flex items-center justify-center flex-wrap gap-x-5 gap-y-10 ">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              status={project.status}
              variant={project.variant}
              description={project.description}
              tags={project.tags}
              thumbnail={project.thumbnail}
              liveLink={project.liveLink}
              repoLink={project.repoLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
