'use client';
import { useEffect, useLayoutEffect, useRef } from 'react';
import styles from './style.module.scss';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import Nav from './nav/Nav';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Rounded from '../../common/RoundedButton/RoundedButton';
import Magnetic from '../../common/Magnetic/Magnetic';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMenu, setMobile } from '../../store/slices/uiSlice';

export default function Header() {
  const header = useRef(null);
  const button = useRef(null);
  const pathname = usePathname('/');
  const dispatch = useDispatch();
  const { isMenuOpen, isMobile } = useSelector((state) => state.ui);

  useEffect(() => {
    if (isMenuOpen) dispatch(toggleMenu());
  }, [pathname, dispatch]);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setMobile(window.innerWidth <= 768));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [dispatch]);

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
            dispatch(toggleMenu())
          );
        },
      },
    });
  }, [dispatch]);

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
      <div
        ref={button}
        className={`${styles.headerButtonContainer} ${
          isMenuOpen ? styles.active : ''
        }`}
      >
        <Rounded
          onClick={() => dispatch(toggleMenu())}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isMenuOpen ? styles.burgerActive : ''
            }`}
          ></div>
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isMenuOpen && <Nav />}</AnimatePresence>
    </>
  );
}
