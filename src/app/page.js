// src/app/page.js
'use client';
import styles from './page.module.scss';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader/PreLoader';
import Landing from '../components/Landing/Landing';
import Projects from '../components/Projects/Projects';
import Description from '../components/Description/Description';
import SlidingImages from '../components/SlidingProjects/SlidingProjects';
import Contact from '../components/Contact/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../store/slices/uiSlice';

export default function Home() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.ui.isLoading);
  const scrollRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      scrollRef.current = new LocomotiveScroll();

      setTimeout(() => {
        dispatch(setLoading(false));
        document.body.style.cursor = 'default';
        window.scrollTo(0, 0);
      }, 2000);
    })();

    return () => {
      if (scrollRef.current) {
        scrollRef.current.destroy();
      }
    }
  }, [dispatch]);

  return (
    <main className={styles.main} style={{ overflowX: 'hidden' }}>
      <AnimatePresence mode="wait">
        {isLoading && isMounted && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  );
}
