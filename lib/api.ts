import axios from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { Note } from '../types/note'; // Перевірте шлях, якщо файл лежить у lib/api.ts, можливо знадобиться '@/types/note'

const noteApi = axios.create({
  // ВИПРАВЛЕНО: Оновлено URL згідно з ТЗ
  baseURL: 'https://goit.study',
});

noteApi.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface FetchNotesParams {
  page?: number;
  perPage?: number;
  search?: string;
  tag?: string; // ВИПРАВЛЕНО: Додано параметр tag
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number; // Якщо бекенд повертає totalPages або total, залиште як у вашій робочій моделі
}

export interface CreateNoteData {
  title: string;
  content: string;
  tag: string;
}

export const fetchNotes = async (params: FetchNotesParams = {}): Promise<FetchNotesResponse> => {
  // ВИПРАВЛЕНО: Створюємо копію параметрів, щоб не мутувати оригінальний об'єкт
  const { tag, ...restParams } = params;
  const queryParams: Record<string, string | number> = {
    ...(restParams as Record<string, string | number>),
  };

  // ВАЖЛИВО: додаємо тег, тільки якщо він існує і це не 'all'
  if (tag && tag !== 'all') {
    queryParams.tag = tag;
  }

  const response: AxiosResponse<FetchNotesResponse> = await noteApi.get('/notes', {
    params: queryParams,
  });
  return response.data;
};

export const createNote = async (noteData: CreateNoteData): Promise<Note> => {
  const response: AxiosResponse<Note> = await noteApi.post('/notes', noteData);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await noteApi.delete(`/notes/${id}`);
  return response.data;
};

// Ця функція нам знадобиться на наступному кроці для модального вікна деталей нотатки
export const fetchNoteById = async (id: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await noteApi.get(`/notes/${id}`);
  return response.data;
};
