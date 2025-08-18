// // src/components/SlidingImages/SlidingImages.jsx
// import { useRef } from 'react';
// import { useScroll, useTransform, motion } from 'framer-motion';
// import styles from './style.module.scss';
// import Image from 'next/image';

// const slider1 = [
//   {
//     type: 'image',
//     color: '#e3e5e7',
//     src: 'karieltrade.gif',
//     href: 'https://karieltrade.com/',
//   },
//   {
//     type: 'video',
//     color: '#d4e3ec',
//     src: 'ecg.mp4',
//     href: 'https://eastcoastgrowersct.com/',
//   },
//   {
//     type: 'image',
//     color: '#e3e3e3',
//     src: 'resume-genius-ai.webp',
//     href: 'https://puter.com/app/resume-genius-ai',
//   },
//   {
//     type: 'image',
//     color: '#21242b',
//     src: 'hey-jinie.gif',
//     href: 'https://heyjinie.com/',
//   },
// ];

// const slider2 = [
//   {
//     type: 'image',
//     color: '#d4e3ec',
//     src: '(12).webp',
//     href: 'https://alishba-siddique.github.io/Calculator_React/',
//   },
//   {
//     type: 'video',
//     color: '#e5e0e1',
//     src: 'diabetic-retinopathy.mp4',
//     href: 'https://huggingface.co/spaces/Alishba404/detection-of-diabetic-retinopathy',
//   },
//   {
//     type: 'video',
//     color: '#e1dad6',
//     src: 'movie-recommender.mp4',
//     href: 'https://movie-recommender-system-alishba.streamlit.app/',
//   },
//   {
//     type: 'image',
//     color: '#d7d4cf',
//     src: '(5).webp',
//     href: 'https://ocr-image-to-text.netlify.app/',
//   },
// ];

// export default function SlidingImages() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'end start'],
//   });

//   const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
//   const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
//   const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

//   return (
//     <div id="work" ref={container} className={styles.slidingImages}>
//       {/* First slider */}
//       <motion.div style={{ x: x1 }} className={styles.slider}>
//         {slider1.map((project, index) => (
//           <div
//             key={index}
//             className={styles.project}
//             style={{ backgroundColor: project.color }}
//           >
//             <div className={styles.imageContainer}>
//               <a href={project.href} target="_blank">
//                 {project.type === 'image' ? (
//                   <Image
//                     fill
//                     alt="project preview"
//                     src={`/images/${project.src}`}
//                   />
//                 ) : (
//                   <video
//                     src={`/videos/${project.src}`}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                   />
//                 )}
//               </a>
//             </div>
//           </div>
//         ))}
//       </motion.div>

//       {/* Second slider */}
//       <motion.div style={{ x: x2 }} className={styles.slider}>
//         {slider2.map((project, index) => (
//           <div
//             key={index}
//             className={styles.project}
//             style={{ backgroundColor: project.color }}
//           >
//             <div className={styles.imageContainer}>
//               <a href={project.href} target="_blank">
//                 {project.type === 'image' ? (
//                   <Image
//                     fill
//                     alt="project preview"
//                     src={`/images/${project.src}`}
//                   />
//                 ) : (
//                   <video
//                     src={`/videos/${project.src}`}
//                     autoPlay
//                     muted
//                     loop
//                     playsInline
//                   />
//                 )}
//               </a>
//             </div>
//           </div>
//         ))}
//       </motion.div>

//       {/* Middle circle */}
//       <motion.div style={{ height: 'auto' }} className={styles.circleContainer}>
//         <div className={styles.circle}></div>
//       </motion.div>
//     </div>
//   );
// }

// src/components/SlidingImages/SlidingImages.jsx
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import styles from './style.module.scss';
import Image from 'next/image';

const slider1 = [
  {
    type: 'image',
    color: '#e3e5e7',
    src: 'karieltrade.gif',
    href: 'https://karieltrade.com/',
  },
  {
    type: 'video',
    color: '#d4e3ec',
    src: 'ecg.mp4',
    href: 'https://eastcoastgrowersct.com/',
  },
  {
    type: 'image',
    color: '#e3e3e3',
    src: 'resume-genius-ai.webp',
    href: 'https://puter.com/app/resume-genius-ai',
  },
  {
    type: 'image',
    color: '#21242b',
    src: 'hey-jinie.gif',
    href: 'https://heyjinie.com/',
  },
];

const slider2 = [
  {
    type: 'image',
    color: '#d4e3ec',
    src: '(12).webp',
    href: 'https://alishba-siddique.github.io/Calculator_React/',
  },
  {
    type: 'video',
    color: '#e5e0e1',
    src: 'diabetic-retinopathy.mp4',
    href: 'https://huggingface.co/spaces/Alishba404/detection-of-diabetic-retinopathy',
  },
  {
    type: 'video',
    color: '#e1dad6',
    src: 'movie-recommender.mp4',
    href: 'https://movie-recommender-system-alishba.streamlit.app/',
  },
  {
    type: 'image',
    color: '#d7d4cf',
    src: '(5).webp',
    href: 'https://ocr-image-to-text.netlify.app/',
  },
];

// Combine all projects for grid layout
const allProjects = [...slider1, ...slider2];

export default function SlidingImages() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  const renderProjectContent = (project) => (
    <div className={styles.imageContainer}>
      <a href={project.href} target="_blank" rel="noopener noreferrer">
        {project.type === 'image' ? (
          <Image
            fill
            alt="project preview"
            src={`/images/${project.src}`}
            unoptimized
          />
        ) : (
          <video
            src={`/videos/${project.src}`}
            autoPlay
            muted
            loop
            playsInline
          />
        )}
      </a>
    </div>
  );

  return (
    <div id="work" ref={container} className={styles.slidingImages}>
      {/* Desktop sliding layout */}
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => (
          <div
            key={`slider1-${index}`}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            {renderProjectContent(project)}
          </div>
        ))}
      </motion.div>

      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => (
          <div
            key={`slider2-${index}`}
            className={styles.project}
            style={{ backgroundColor: project.color }}
          >
            {renderProjectContent(project)}
          </div>
        ))}
      </motion.div>

      {/* Mobile/Tablet grid layout */}
      <div className={styles.gridLayout}>
        {allProjects.map((project, index) => (
          <div
            key={`grid-${index}`}
            className={styles.gridProject}
            style={{ backgroundColor: project.color }}
          >
            {renderProjectContent(project)}
          </div>
        ))}
      </div>

      {/* Middle circle */}
      <motion.div style={{ height: 'auto' }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
}
