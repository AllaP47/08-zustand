
import type { Metadata } from 'next';
import { TanStackProvider } from '../components/TanStackProvider/TanStackProvider';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Efficient application for managing personal notes',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <TanStackProvider>
          <Header />
          <div style={{ flex: '1 0 auto' }}>{children}</div>
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}

