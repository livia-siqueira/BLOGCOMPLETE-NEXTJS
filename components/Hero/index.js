import styles from "./hero.module.css";
import Image from "next/image";
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/livia.jpg"
          alt="Image Livia"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Lívia</h1>
      <p>
        This blog has the function of presenting the projects developed by me.
        I am a web development student and currently working with javascript, its
        reactjs lib and nextjs framework. I study Flutter and deepen my
        knowledge in the javascript language;
      </p>
    </section>
  );
};

export default Hero;
