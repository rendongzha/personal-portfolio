import classes from "./Projects.module.css";
import projectData from "../data/project-data";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className={classes.projects}>
      <h2>These are some of my projects</h2>
      <div className={classes["project-container"]}>
        {projectData.map((project) => (
          <ProjectItem
            key={project.id}
            title={project.title}
            webUrl={project.webUrl}
            imageUrl={project.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
