import type { Metadata } from 'next';
import { NoteForm } from '../../../../components/NoteForm/NoteForm'; 
import css from './createnote.module.css';

export const metadata: Metadata = {
  title: 'Create note | NoteHub',
  description: 'Create a new note with automatic draft saving.',
 
  openGraph: {
    title: 'Create note | NoteHub',
    description: 'Create a new note with automatic draft saving.',
    url: 'https://notehub.com',
    images: [
      {
        url: 'https://goit.global',
        width: 1200,
        height: 630,
        alt: 'Create note in NoteHub',
      },
    ],
  },
};


export default function CreateNotePage() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
