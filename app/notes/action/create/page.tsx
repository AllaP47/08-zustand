import type { Metadata } from 'next';
import { NoteForm } from '../../../../app/components/NoteForm/NoteForm'; // Змінено на прямий відносний шлях
import css from './CreateNote.module.css';

export const metadata: Metadata = {
  title: 'Create note | NoteHub',
  description: 'Create a new note with automatic draft saving.',
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
