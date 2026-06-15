export type NoteTagType = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';

export interface Note {
  id: string;
  title: string;
  content: string; // Нова назва поля
  tag: NoteTagType; // Один рядок
  createdAt: string;
  updatedAt: string;
}
