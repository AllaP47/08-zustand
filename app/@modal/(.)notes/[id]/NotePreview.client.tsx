// app/@modal/(.)notes/[id]/NotePreview.client.tsx
'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { fetchNoteById } from '@/lib/api'; // Перевірте шлях до вашого api.ts
import { Modal }  from '../../../../components/Modal/Modal'; // Вкажіть правильний шлях до вашого компонента Modal з минулих ДЗ

interface NotePreviewClientProps {
  id: string;
}

export default function NotePreviewClient({ id }: NotePreviewClientProps) {
  const router = useRouter();

  // Використовуємо useQuery, дані підтягнуться миттєво завдяки prefetch на сервері
  const { data: note, isLoading } = useQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  // Функція закриття модалки через повернення назад за історією браузера
  const handleClose = () => {
    router.push('/notes/filter/all');
  };

  if (isLoading) return null;

  return (
    <Modal isOpen={true} onClose={handleClose}>
      <div>
        <h2>{note?.title}</h2>
        <p>{note?.content}</p>
        {note?.tag && (
          <div style={{ marginTop: '15px' }}>
            <span style={{ background: '#e0e0e0', padding: '4px 10px', borderRadius: '4px', fontSize: '14px' }}>
              {note.tag}
            </span>
          </div>
        )}
      </div>
    </Modal>
  );
}
