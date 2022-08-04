import classes from "./ProjectItem.module.css";

const ProjectItem = (props) => {
  console.log(props.imageUrl);
  return (
    <a href={props.webUrl} target="_blank" className={classes["project-tile"]}>
      <img src={props.imageUrl} alt={props.title} />
      <p className={classes.title}>{props.title}</p>
    </a>
  );
};

export default ProjectItem;
