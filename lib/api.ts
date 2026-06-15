import axios from 'axios';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import type { Note } from '../types/note';

const noteApi = axios.create({
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
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface CreateNoteData {
  title: string;
  content: string;
  tag: string;
}

export const fetchNotes = async (params: FetchNotesParams = {}): Promise<FetchNotesResponse> => {
  const response: AxiosResponse<FetchNotesResponse> = await noteApi.get('/notes', { params });
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

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response: AxiosResponse<Note> = await noteApi.get(`/notes/${id}`);
  return response.data;
};
