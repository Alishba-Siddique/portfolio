// // // src/components/Header/Header.jsx
// // 'use client';
// // import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// // import styles from './style.module.scss';
// // import { usePathname } from 'next/navigation';
// // import { AnimatePresence } from 'framer-motion';
// // import Nav from './nav/Nav';
// // import gsap from 'gsap';
// // import { ScrollTrigger } from 'gsap/ScrollTrigger';
// // import Rounded from '../../common/RoundedButton/RoundedButton';
// // import Magnetic from '../../common/Magnetic/Magnetic';

// // export default function Header() {
// //   const header = useRef(null);
// //   const [isActive, setIsActive] = useState(false);
// //   const [isMobile, setIsMobile] = useState(false);
// //   const pathname = usePathname("/");
// //   const button = useRef(null);

// //   useEffect(() => {
// //     if (isActive) setIsActive(false);
// //   }, [pathname]);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setIsMobile(window.innerWidth <= 768);
// //     };

// //     handleResize(); // Initial check
// //     window.addEventListener('resize', handleResize);
// //     return () => window.removeEventListener('resize', handleResize);
// //   }, []);

// //   useLayoutEffect(() => {
// //     gsap.registerPlugin(ScrollTrigger);
// //     gsap.to(button.current, {
// //       scrollTrigger: {
// //         trigger: document.documentElement,
// //         start: 0,
// //         end: window.innerHeight,
// //         onLeave: () => {
// //           gsap.to(button.current, {
// //             scale: 1,
// //             duration: 0.25,
// //             ease: 'power1.out',
// //           });
// //         },
// //         onEnterBack: () => {
// //           gsap.to(
// //             button.current,
// //             { scale: 0, duration: 0.25, ease: 'power1.out' },
// //             setIsActive(false)
// //           );
// //         },
// //       },
// //     });
// //   }, []);

// //   return (
// //     <>
// //       <div ref={header} className={styles.header}>
// //         <div className={styles.logo}>
// //           <p className={styles.copyright}>©</p>
// //           <a href="/" className={styles.name}>
// //             <p className={styles.codeBy}>Code by</p>
// //             <p className={styles.dennis}>Alishba</p>
// //             <p className={styles.snellenberg}>Siddique</p>
// //           </a>
// //         </div>
// //         {!isMobile && (
// //           <div className={styles.nav}>
// //             <Magnetic>
// //               <div className={styles.el}>
// //                 <a href={'#work'}>Work</a>
// //                 <div className={styles.indicator}></div>
// //               </div>
// //             </Magnetic>
// //             <Magnetic>
// //               <div className={styles.el}>
// //                 <a href={'#about'}>About</a>
// //                 <div className={styles.indicator}></div>
// //               </div>
// //             </Magnetic>
// //             <Magnetic>
// //               <div className={styles.el}>
// //                 <a href={'#contact'}>Contact</a>
// //                 <div className={styles.indicator}></div>
// //               </div>
// //             </Magnetic>
// //           </div>
// //         )}
// //       </div>
// //       <div ref={button} className={styles.headerButtonContainer}>
// //         <Rounded
// //           onClick={() => {
// //             setIsActive(!isActive);
// //           }}
// //           className={`${styles.button}`}
// //         >
// //           <div
// //             className={`${styles.burger} ${
// //               isActive ? styles.burgerActive : ''
// //             }`}
// //           ></div>
// //         </Rounded>
// //       </div>
// //       <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
// //     </>
// //   );
// // }


// // src/components/Header/Header.jsx
// 'use client';
// import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import styles from './style.module.scss';
// import { usePathname } from 'next/navigation';
// import { AnimatePresence } from 'framer-motion';
// import Nav from './nav/Nav';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Rounded from '../../common/RoundedButton/RoundedButton';
// import Magnetic from '../../common/Magnetic/Magnetic';

// export default function Header() {
//   const header = useRef(null);
//   const [isActive, setIsActive] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const pathname = usePathname("/");
//   const button = useRef(null);

//   useEffect(() => {
//     if (isActive) setIsActive(false);
//   }, [pathname]);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize(); // Initial check
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useLayoutEffect(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     gsap.to(button.current, {
//       scrollTrigger: {
//         trigger: document.documentElement,
//         start: 0,
//         end: window.innerHeight,
//         onLeave: () => {
//           gsap.to(button.current, {
//             scale: 1,
//             duration: 0.25,
//             ease: 'power1.out',
//           });
//         },
//         onEnterBack: () => {
//           gsap.to(
//             button.current,
//             { scale: 0, duration: 0.25, ease: 'power1.out' },
//             setIsActive(false)
//           );
//         },
//       },
//     });
//   }, []);

//   return (
//     <>
//       <div ref={header} className={styles.header}>
//         <div className={styles.logo}>
//           <p className={styles.copyright}>©</p>
//           <a href="/" className={styles.name}>
//             <p className={styles.codeBy}>Code by</p>
//             <p className={styles.dennis}>Alishba</p>
//             <p className={styles.snellenberg}>Siddique</p>
//           </a>
//         </div>
//         {!isMobile && (
//           <div className={styles.nav}>
//             <Magnetic>
//               <div className={styles.el}>
//                 <a href={'#work'}>Work</a>
//                 <div className={styles.indicator}></div>
//               </div>
//             </Magnetic>
//             <Magnetic>
//               <div className={styles.el}>
//                 <a href={'#about'}>About</a>
//                 <div className={styles.indicator}></div>
//               </div>
//             </Magnetic>
//             <Magnetic>
//               <div className={styles.el}>
//                 <a href={'#contact'}>Contact</a>
//                 <div className={styles.indicator}></div>
//               </div>
//             </Magnetic>
//           </div>
//         )}
//       </div>
//       <div ref={button} className={`${styles.headerButtonContainer} ${isActive ? styles.active : ''}`}>
//         <Rounded
//           onClick={() => {
//             setIsActive(!isActive);
//           }}
//           className={`${styles.button}`}
//         >
//           <div
//             className={`${styles.burger} ${
//               isActive ? styles.burgerActive : ''
//             }`}
//           ></div>
//         </Rounded>
//       </div>
//       <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
//     </>
//   );
// }

// src/components/Header/Header.jsx
'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton/RoundedButton';
import Magnetic from '../../common/Magnetic/Magnetic';

export default function Header() {
  const header = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname("/");
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]); // Added: , [pathname, isActive]

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: 'power1.out',
          });
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: 'power1.out' },
            setIsActive(false)
          );
        },
      },
    });
  }, []);

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <a href="/" className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Alishba</p>
            <p className={styles.snellenberg}>Siddique</p>
          </a>
        </div>
        {!isMobile && (
          <div className={styles.nav}>
            <Magnetic>
              <div className={styles.el}>
                <a href={'#work'}>Work</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <a href={'#about'}>About</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
            <Magnetic>
              <div className={styles.el}>
                <a href={'#contact'}>Contact</a>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </div>
        )}
      </div>
      <div ref={button} className={`${styles.headerButtonContainer} ${isActive ? styles.active : ''}`}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  );
}