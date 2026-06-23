import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { TanStackProvider } from '../components/TanStackProvider/TanStackProvider';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import './globals.css';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-roboto',
});


export const metadata: Metadata = {
  title: 'Створення нотатки | NoteHub',
  description: 'Створюйте та редагуйте свої нотатки швидко та зручно.',
  openGraph: {
    url: 'https://notehub.com/notes/action/create', 
    type: 'website',
    title: 'Створення нотатки | NoteHub',
    description: 'Створюйте та редагуйте свої нотатки швидко та зручно.',
    images: [
      {
     
        url: 'https://notehub.com', 
        width: 1200,
        height: 630,
        alt: 'NoteHub - Створення нотатки',
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={roboto.variable}>
      <body 
        className={roboto.className} 
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}
      >
        <TanStackProvider>
          <Header />
          <div style={{ flex: '1 0 auto' }}>
            {children}
          </div>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}



