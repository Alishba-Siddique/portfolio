import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
import Rounded from '../../common/RoundedButton/RoundedButton';
export default function Description() {
  const phrase =
    "Empowering Ideas in the Digital Age.Together, we’ll create experiences that break boundaries. No fluff, just innovative solutions, always pushing the limits of what's possible.";
  const description = useRef(null);
  const isInView = useInView(description);
  return (
    <div id="about" ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {phrase.split(' ').map((word, index) => {
            return (
              <span key={index} className={styles.mask}>
                <motion.span
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? 'open' : 'closed'}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <motion.p variants={opacity} animate={isInView ? 'open' : 'closed'}>
          My passion for AI, design, and coding, combined with my skills as a
          Web Developer and Software Engineer, positions me as a versatile and
          quick learner, ready to adapt to new technologies and challenges in
          the ever-evolving tech landscape.
        </motion.p>
        {/* <div data-scroll data-scroll-speed={0.1}>
                    <Rounded className={styles.button}>
                        <a href='#about'>About me</a>
                    </Rounded>
                </div> */}
      </div>
    </div>
  );
}
