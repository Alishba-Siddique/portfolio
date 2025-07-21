// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import { Providers } from '../store/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alishba Siddique - Software Engineer & Full Stack Developer',
  description: 'Alishba Siddique is a software engineer with a passion for building scalable and efficient web applications.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
