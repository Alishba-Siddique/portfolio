import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
  {
    color: '#e3e5e7',
    src: '(9).webp',
    href: 'https://ocr-image-to-text.netlify.app/',
  },
  {
    color: '#d4e3ec',
    src: '(10).webp',
    href: 'https://www.loom.com/share/c28e2fae91f942629f65782a40329533',
  },
  {
    color: '#e3e3e3',
    src: '(14).webp',
    href: 'https://github.com/Alishba-Siddique/facial-recognition-attendance-project',
  },
  {
    color: '#21242b',
    src: '(4).webp',
    href: 'https://github.com/Alishba-Siddique/ai-image-generator',
  },
];

const slider2 = [
  {
    color: '#d4e3ec',
    src: '(2).webp',
    href: 'https://www.loom.com/share/c28e2fae91f942629f65782a40329533',
  },
  {
    color: '#e5e0e1',
    src: '(6).webp',
    href: 'https://github.com/Alishba-Siddique/Pneumonia-Prediction-using-Convolational-Neural-Network',
  },
  {
    color: '#d7d4cf',
    src: '(13).webp',
    href: 'https://alishba-siddique.github.io/Homeration/',
  },
  {
    color: '#e1dad6',
    src: '(11).webp',
    href: 'https://alishba-siddique.github.io/Calculator_React/',
  },
];

export default function index() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div id="work" ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <a href={project.href} target="_blank">
                  <Image
                    fill={true}
                    alt={'image'}
                    src={`/images/${project.src}`}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <a href={project.href} target="_blank">
                  <Image
                    fill={true}
                    alt={'image'}
                    src={`/images/${project.src}`}
                  />
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
