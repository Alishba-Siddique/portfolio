// src/app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header/Header';
import { Providers } from '../store/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Alishba Siddique - Portfolio',
  description: 'Portfolio website of Alishba Siddique',
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
