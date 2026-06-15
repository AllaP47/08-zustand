import type { Metadata } from 'next';
import { TanStackProvider } from '../components/TanStackProvider/TanStackProvider';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'NoteHub',
  description: 'Efficient application for managing personal notes',
};

// ВИПРАВЛЕНО: Додано типізацію та приймання пропу modal разом із children
interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en">
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <TanStackProvider>
          <Header />
          <div style={{ flex: '1 0 auto' }}>{children}</div>
          
          {/* ВИПРАВЛЕНО: Рендеримо слот модального вікна всередині провайдера, 
              щоб у ньому працювали хуки useQuery */}
          {modal}
          
          <Footer />
        </TanStackProvider>
      </body>
    </html>
  );
}


