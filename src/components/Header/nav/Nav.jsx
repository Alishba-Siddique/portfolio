// // src/components/Header/nav/Nav.jsx
// import React, { useState, useEffect } from 'react'
// import styles from './style.module.scss';
// import { motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';
// import { menuSlide } from '../animation';
// import Link from './LinkNav/LinkNav';
// import Curve from './Curve/Curve';
// import Footer from './Footer/Footer';

// const navItems = [
//   {
//     title: "Home",
//     href: "#",
//   },
//   {
//     title: "Work",
//     href: "#work",
//   },
//   {
//     title: "About",
//     href: "#about",
//   },
//   {
//     title: "Contact",
//     href: "#contact",
//   },
// ]

// export default function Nav() {
//   const pathname = usePathname();
//   const [selectedIndicator, setSelectedIndicator] = useState(pathname);
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize(); // Check initial size
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Adjust menuSlide animation based on screen size
//   const slideAnimation = {
//     ...menuSlide,
//     enter: {
//       ...menuSlide.enter,
//       width: isMobile ? '100%' : '500px',
//     }
//   };

//   return (
//     <motion.div 
//       variants={slideAnimation} 
//       initial="initial" 
//       animate="enter" 
//       exit="exit" 
//       className={styles.menu}
//     >
//       <div className={styles.body}>
//         <div 
//           onMouseLeave={() => {setSelectedIndicator(pathname)}} 
//           className={styles.nav}
//         >
//           <div className={styles.header}>
//             <p>Navigation</p>
//           </div>
//           {navItems.map((data, index) => {
//             return <Link 
//               key={index} 
//               data={{...data, index}} 
//               isActive={selectedIndicator == data.href} 
//               setSelectedIndicator={setSelectedIndicator}
//             />
//           })}
//         </div>
//         <Footer />
//       </div>
//       <Curve />
//     </motion.div>
//   )
// }


import React, { useState, useEffect } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import Link from './LinkNav/LinkNav';
import Curve from './Curve/Curve';
import Footer from './Footer/Footer';

const navItems = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Work",
    href: "#work",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Contact",
    href: "#contact",
  },
]

export default function Nav() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial size
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust menuSlide animation based on screen size
  const slideAnimation = {
    ...menuSlide,
    enter: {
      ...menuSlide.enter,
      width: isMobile ? '100%' : '31.25rem',
    }
  };

  return (
    <motion.div 
      variants={slideAnimation} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
    >
      <div className={styles.body}>
        <div 
          onMouseLeave={() => {setSelectedIndicator(pathname)}} 
          className={styles.nav}
        >
          <div className={styles.header}>
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return <Link 
              key={index} 
              data={{...data, index}} 
              isActive={selectedIndicator == data.href} 
              setSelectedIndicator={setSelectedIndicator}
            />
          })}
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}