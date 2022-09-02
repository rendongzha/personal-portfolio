import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section id="welcome" className={classes.welcome}>
      <h1>Hey I am Katherine</h1>
      <p>Targeted position: front-end developer</p>
      <p className={classes.skillset}>
        Skillset: HTML, CSS, JavaScript, React.js, Redux.js,TypeScript, Sass,
        Git
      </p>
    </section>
  );
};

export default Welcome;
