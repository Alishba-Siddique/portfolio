// // src/components/Contact/Contact.jsx
// import styles from './style.module.scss';
// import Image from 'next/image';
// import Rounded from '../../common/RoundedButton/RoundedButton';
// import { useRef } from 'react';
// import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
// import Magnetic from '../../common/Magnetic/Magnetic';

// export default function Contact() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'end end'],
//   });
//   const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
//   const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
//   let now = new Date();
//   let currentTime = now.toLocaleTimeString('en-US', {
//     hour: '2-digit',
//     minute: '2-digit',
//   });

//   return (
//     <motion.div style={{ y }} ref={container} className={styles.contact}>
//       <div className={styles.body}>
//         <div className={styles.title}>
//           <span>
//             <div className={styles.imageContainer}>
//               <Image
//                 fill={true}
//                 alt={'image'}
//                 src={`/images/background1.jpg`}
//               />
//             </div>
//             <h2>Let&apos;s work</h2>
//           </span>
//           <h2>together</h2>
//           <motion.div
//             style={{ x }}
//             className={styles.buttonContainer}
//             id="contact"
//           >
//             <Rounded backgroundColor={'#6781F6'} className={styles.button}>
//               <a href="mailto:alishbasiddique38@gmail.com">Get in touch</a>
//             </Rounded>
//           </motion.div>
//           <motion.svg
//             style={{ rotate, scale: 2 }}
//             width="9"
//             height="9"
//             viewBox="0 0 9 9"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
//               fill="white"
//             />
//           </motion.svg>
//         </div>
//         <div className={styles.nav}>
//           <Rounded>
//             <a href="mailto:alishbasiddique38@gmail.com">
//               alishbasiddique38@gmail.com
//             </a>
//           </Rounded>
//           <Rounded>
//             <a href="tel:+923219431478">+92 321 9431478</a>
//           </Rounded>
//         </div>
//         <div className={styles.info}>
//           <div>
//             <span>
//               <h3>Version</h3>
//               <p>2024 © Edition</p>
//             </span>
//             <span>
//               <h3>Loacl Time</h3>
//               <p>{currentTime} GMT+5</p>
//             </span>
//           </div>
//           <div>
//             <span>
//               <h3>socials</h3>
//               <Magnetic>
//                 <a href="#">Alishba</a>
//               </Magnetic>
//             </span>
//             <Magnetic>
//               <a
//                 href="https://www.linkedin.com/in/alishba-siddique"
//                 target="_blank"
//               >
//                 LinkedIn
//               </a>
//             </Magnetic>
//             <Magnetic>
//               <a href="https://github.com/Alishba-Siddique" target="_blank">
//                 GitHub
//               </a>
//             </Magnetic>
//             {/* <Magnetic>
//               <p>Twitter</p>
//             </Magnetic> */}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }


// src/components/Contact/Contact.jsx
import styles from './style.module.scss';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton/RoundedButton';
import { useRef } from 'react';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from '../../common/Magnetic/Magnetic';

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);
  let now = new Date();
  let currentTime = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image
                fill={true}
                alt={'image'}
                src={`/images/background1.jpg`}
              />
            </div>
            <h2>Let's work</h2>
          </span>
          <h2>together</h2>
          <motion.div
            style={{ x }}
            className={styles.buttonContainer}
            id="contact"
          >
            <Rounded backgroundColor={'#6781F6'} className={styles.button}>
              <a href="mailto:alishbasiddique38@gmail.com">Get in touch</a>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <a href="mailto:alishbasiddique38@gmail.com">
              alishbasiddique38@gmail.com
            </a>
          </Rounded>
          <Rounded>
            <a href="tel:+923219431478">+92 321 9431478</a>
          </Rounded>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <h3>Loacl Time</h3>
              <p>{currentTime} GMT+5</p>
            </span>
          </div>
          <div>
            <span>
              <h3>socials</h3>
              <Magnetic>
                <a href="#">Alishba</a>
              </Magnetic>
            </span>
            <Magnetic>
              <a
                href="https://www.linkedin.com/in/alishba-siddique"
                target="_blank"
              >
                LinkedIn
              </a>
            </Magnetic>
            <Magnetic>
              <a href="https://github.com/Alishba-Siddique" target="_blank">
                GitHub
              </a>
            </Magnetic>
            {/* <Magnetic>
              <p>Twitter</p>
            </Magnetic> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}