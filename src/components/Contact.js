import classes from "./Contact.module.css";
import { FaGithub, FaLinkedin, FaMobile } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactItem from "./ContactItem";

const CONTACT_DATA = [
  {
    id: 1,
    method: "Github",
    icon: <FaGithub />,
    url: "https://github.com/rendongzha?tab=repositories",
  },
  {
    id: 2,
    method: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/katherine-zha-31b71316b/",
  },
  {
    id: 3,
    method: "Email",
    icon: <MdEmail />,
    url: "mailto:rendong0809@gmail.com",
  },
  {
    id: 4,
    method: "Call",
    icon: <FaMobile />,
    url: "tel:0413555264",
  },
];

const Contact = () => {
  return (
    <section className={classes.contact} id="contact">
      <h2>Let's work together...</h2>
      <div>
        <ul className={classes["contact-container"]}>
          {CONTACT_DATA.map((data) => (
            <ContactItem
              key={data.id}
              method={data.method}
              icon={data.icon}
              url={data.url}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
