// // src/components/Projects/Projects.jsx
// 'use client';
// import styles from './style.module.scss';
// import { useState, useEffect, useRef } from 'react';
// import Project from './components/project/ProjectText';
// import { motion } from 'framer-motion';
// import gsap from 'gsap';
// import Image from 'next/image';
// import Rounded from '../../common/RoundedButton/RoundedButton';

// const projects = [
//   {
//     title: 'AI',
//     src: '(1).webp',
//     color: '#000000',
//     href: 'https://github.com/Alishba-Siddique/facial-recognition-attendance-project',
//   },
//   {
//     title: 'Full Stack',
//     src: '(2).webp',
//     color: '#8C8C8C',
//     href: 'https://github.com/Alishba-Siddique/ecommerce-store',
//   },
//   {
//     title: 'Freelance',
//     src: '(3).webp',
//     color: '#EFE8D3',
//     href: 'https://www.fiverr.com/s/o8xyvbA',
//   },
//   {
//     title: 'Portfolio Client',
//     src: '(4).webp',
//     color: '#706D63',
//     href: 'https://portfolio-fiverr-nine.vercel.app/',
//   },
// ];

// const scaleAnimation = {
//   initial: { scale: 0, x: '-50%', y: '-50%' },
//   enter: {
//     scale: 1,
//     x: '-50%',
//     y: '-50%',
//     transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
//   },
//   closed: {
//     scale: 0,
//     x: '-50%',
//     y: '-50%',
//     transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
//   },
// };

// export default function Projects() {
//   const [modal, setModal] = useState({ active: false, index: 0, href: '' });
//   const { active, index, href } = modal;
//   const modalContainer = useRef(null);
//   const cursor = useRef(null);
//   const cursorLabel = useRef(null);

//   let xMoveContainer = useRef(null);
//   let yMoveContainer = useRef(null);
//   let xMoveCursor = useRef(null);
//   let yMoveCursor = useRef(null);
//   let xMoveCursorLabel = useRef(null);
//   let yMoveCursorLabel = useRef(null);

//   useEffect(() => {
//     //Move Container
//     xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
//       duration: 0.8,
//       ease: 'power3',
//     });
//     yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
//       duration: 0.8,
//       ease: 'power3',
//     });
//     //Move cursor
//     xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
//       duration: 0.5,
//       ease: 'power3',
//     });
//     yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
//       duration: 0.5,
//       ease: 'power3',
//     });
//     //Move cursor label
//     xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
//       duration: 0.45,
//       ease: 'power3',
//     });
//     yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
//       duration: 0.45,
//       ease: 'power3',
//     });
//   }, []);

//   const moveItems = (x, y) => {
//     xMoveContainer.current(x);
//     yMoveContainer.current(y);
//     xMoveCursor.current(x);
//     yMoveCursor.current(y);
//     xMoveCursorLabel.current(x);
//     yMoveCursorLabel.current(y);
//   };
//   const manageModal = (active, index, x, y) => {
//     moveItems(x, y);
//     setModal({ active, index, href: projects[index].href });
//   };

//   return (
//     <main
//       onClick={() => {
//         href && window.open(href, '_blank');
//       }}
//       onMouseMove={(e) => {
//         moveItems(e.clientX, e.clientY);
//       }}
//       className={styles.projects}
//     >
//       <div className={styles.body}>
//         {projects.map((project, index) => {
//           return (
//             <Project
//               index={index}
//               title={project.title}
//               manageModal={manageModal}
//               project={project}
//               key={index}
//             />
//           );
//         })}
//       </div>
//       <Rounded>
//         <a href="https://github.com/Alishba-Siddique" target="_blank">
//           More work
//         </a>
//       </Rounded>
//       <>
//         <motion.div
//           ref={modalContainer}
//           variants={scaleAnimation}
//           initial="initial"
//           animate={active ? 'enter' : 'closed'}
//           className={styles.modalContainer}
//         >
//           <div
//             style={{ top: index * -100 + '%' }}
//             className={styles.modalSlider}
//           >
//             {projects.map((project, index) => {
//               const { src, color } = project;
//               return (
//                 <div
//                   className={styles.modal}
//                   style={{ backgroundColor: color }}
//                   key={`modal_${index}`}
//                 >
//                   <Image
//                     src={`/images/${src}`}
//                     width={300}
//                     height={0}
//                     alt="image"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>
//         <motion.div
//           ref={cursor}
//           className={styles.cursor}
//           variants={scaleAnimation}
//           initial="initial"
//           animate={active ? 'enter' : 'closed'}
//         ></motion.div>
//         <motion.div
//           ref={cursorLabel}
//           className={styles.cursorLabel}
//           variants={scaleAnimation}
//           initial="initial"
//           animate={active ? 'enter' : 'closed'}
//         >
//           <p>View</p>
//         </motion.div>
//       </>
//     </main>
//   );
// }


// src/components/Projects/Projects.jsx
'use client';
import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project/ProjectText';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton/RoundedButton';

const projects = [
  {
    title: 'AI',
    src: '(1).webp',
    color: '#000000',
    href: 'https://github.com/Alishba-Siddique/facial-recognition-attendance-project',
  },
  {
    title: 'Full Stack',
    src: '(2).webp',
    color: '#8C8C8C',
    href: 'https://github.com/Alishba-Siddique/ecommerce-store',
  },
  {
    title: 'Freelance',
    src: '(3).webp',
    color: '#EFE8D3',
    href: 'https://www.fiverr.com/s/o8xyvbA',
  },
  {
    title: 'Portfolio Client',
    src: '(4).webp',
    color: '#706D63',
    href: 'https://portfolio-fiverr-nine.vercel.app/',
  },
];

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Projects() {
  const [modal, setModal] = useState({ active: false, index: 0, href: '' });
  const { active, index, href } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, 'left', {
      duration: 0.8,
      ease: 'power3',
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, 'top', {
      duration: 0.8,
      ease: 'power3',
    });
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
      duration: 0.5,
      ease: 'power3',
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
      duration: 0.5,
      ease: 'power3',
    });
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'left', {
      duration: 0.45,
      ease: 'power3',
    });
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, 'top', {
      duration: 0.45,
      ease: 'power3',
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
    xMoveCursorLabel.current(x);
    yMoveCursorLabel.current(y);
  };
  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index, href: projects[index].href });
  };

  return (
    <main
      onClick={() => {
        href && window.open(href, '_blank');
      }}
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map((project, index) => {
          return (
            <Project
              index={index}
              title={project.title}
              manageModal={manageModal}
              project={project}
              key={index}
            />
          );
        })}
      </div>
      <Rounded>
        <a href="https://github.com/Alishba-Siddique" target="_blank">
          More work
        </a>
      </Rounded>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + '%' }}
            className={styles.modalSlider}
          >
            {projects.map((project, index) => {
              const { src, color } = project;
              return (
                <div
                  className={styles.modal}
                  style={{ backgroundColor: color }}
                  key={`modal_${index}`}
                >
                  <Image
                    src={`/images/${src}`}
                    width={300}
                    height={0}
                    alt="image"
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        ></motion.div>
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? 'enter' : 'closed'}
        >
          <p>View</p>
        </motion.div>
      </>
    </main>
  );
}