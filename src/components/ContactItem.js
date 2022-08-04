import classes from "./ContactItem.module.css";

const ContactItem = (props) => {
  return (
    <li className={classes["contact-method"]}>
      <a href={props.url} target="_blank" className={classes["contact-link"]}>
        <span>{props.icon}</span>
        <p>{props.method}</p>
      </a>
    </li>
  );
};

export default ContactItem;
