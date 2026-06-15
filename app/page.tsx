import React from 'react';
import Link from 'next/link';


import cssStyles from './Home.module.css';


const css = (cssStyles || {}) as Record<string, string>;

export default function HomePage() {
  return (
    <main className={css.main || ''}>
      <div className={css.container || ''}>
        <h1 className={css.title || ''}>Welcome to NoteHub</h1>
        <p className={css.description || ''}>
          NoteHub is a simple and efficient application designed for managing
          personal notes. It helps keep your thoughts organized and accessible
          in one place, whether you are at home or on the go.
        </p>
        <p className={css.description || ''}>
          The app provides a clean interface for writing, editing, and browsing
          notes. With support for keyword search and structured organization,
          NoteHub offers a streamlined experience for anyone who values clarity
          and productivity.
        </p>
        
      
        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link 
            href="/notes" 
            style={{ 
              display: 'inline-block', 
              padding: '12px 24px', 
              backgroundColor: '#0d6efd', 
              color: '#fff', 
              borderRadius: '4px', 
              textDecoration: 'none', 
              fontWeight: '500' 
            }}
          >
            Open My Notes →
          </Link>
        </div>
      </div>
    </main>
  );
}


