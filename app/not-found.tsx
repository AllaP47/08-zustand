import type { Metadata } from 'next';
import Link from 'next/link';

// ВИПРАВЛЕНО: Додано повний об'єкт метаданих з Open Graph для сторінки 404
export const metadata: Metadata = {
  title: '404 - Page not found | NoteHub',
  description: 'На жаль, запитувану сторінку не знайдено на сервері NoteHub.',
  openGraph: {
    title: '404 - Page not found | NoteHub',
    description: 'На жаль, запитувану сторінку не знайдено на сервері NoteHub.',
    url: 'https://notehub.com',
    images: [
      {
        url: 'https://goit.global',
        width: 1200,
        height: 630,
        alt: 'Сторінку не знайдено | NoteHub',
      },
    ],
  },
};

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '40px' }}>
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/notes/filter/all" style={{ color: '#0d6efd', textDecoration: 'underline' }}>
        Back to notes
      </Link>
    </div>
  );
}

