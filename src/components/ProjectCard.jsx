import { Link } from 'react-router-dom';
import Tag from './Tag';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function ProjectCard({
  title,
  status,
  variant,
  description,
  tags,
  thumbnail,
  liveLink = false,
  repoLink = false,
}) {
  return (
    <div className="flex flex-col border border-mist-700 w-75 max-h-85 round-btn">
      <div className="w-full h-200 rounded-t-sm text-center overflow-hidden text-(--text-secondary)">
        <img
          src={thumbnail}
          className="h-full rounded-t-md content-center"
          alt="loading.."
        />
      </div>
      <div className="h-200 py-3 px-3 ">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold">{title}</h3>
          <Tag tag={status} variant={variant} />
        </div>
        <p className="max-h-20 h-15 text-xs text-(--text-secondary) ">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} variant="tech"></Tag>
          ))}
        </div>
        <div className="flex items-center justify-start gap-4 text-xs mb-0 mt-2 pt-2 pl-1 border-t border-t-mist-700">
          <div
            className={`flex items-center ${repoLink ? 'text-(--primary)' : ' text-(--text-muted)'}`}
          >
            <Link to={liveLink}>
              {
                <span
                  className={`mr-1 ${liveLink ? 'text-(--primary)' : 'text-(--text-muted)'}`}
                >
                  GitHub
                </span>
              }
              <FaGithub className="inline-block" />
            </Link>
          </div>
          <div
            className={`flex items-center ${repoLink ? 'text-(--primary)' : ' text-(--text-muted)'}`}
          >
            <Link to={repoLink}>
              {<span className={`mr-1`}>Live Demo</span>}
            </Link>
            <FaExternalLinkAlt className="inline-block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
