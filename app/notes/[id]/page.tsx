import type { Metadata } from 'next';
import { fetchNoteById } from '../../../lib/api/notes';
import NoteDetailsClient from './NoteDetails.client';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const note = await fetchNoteById(id);
    return {
      title: `${note.title} | NoteHub`,
      description: note.content || '',
      openGraph: {
        title: `${note.title} | NoteHub`,
        description: note.content || '',
        url: `https://notehub.com{id}`,
        images: [
          {
            url: 'https://goit.global',
            width: 1200,
            height: 630,
            alt: `Note: ${note.title}`,
          },
        ],
      },
    };
  } catch {
    return {
      title: 'Note not found | NoteHub',
    };
  }
}

export default async function NotePage({ params }: Props) {
 
  await params;
  

  return <NoteDetailsClient />;
}
