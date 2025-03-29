import Image from "next/image";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/monojit.jpg"
          alt="An image showing Monojit"
          width={300}
          height={300}
        />
      </div>
      <h1> Hi, I am Monojit </h1>
      <p>
        I blog about web development, specializing in full stack development
      </p>
    </section>
  );
};

export default Hero;
