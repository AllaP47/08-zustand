

import React from 'react';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from '@/Notes.client';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export default async function NotesFilterPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  const currentSlug = slug && slug.length > 0 ? slug[0] : 'all';
  const activeTag = currentSlug === 'all' ? undefined : currentSlug;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', { page: 1, search: '', tag: activeTag }],
    queryFn: () => fetchNotes({ page: 1, search: '', tag: activeTag }),
  });

 return (
  <HydrationBoundary state={dehydrate(queryClient)}>
    {/* ВИПРАВЛЕНО: Додано key={activeTag || 'all'}. Тепер при зміні тегу 
        компонент автоматично скидатиме свій внутрішній стан page на 1 */}
    <NotesClient key={activeTag || 'all'} tag={activeTag} />
  </HydrationBoundary>
);
}

