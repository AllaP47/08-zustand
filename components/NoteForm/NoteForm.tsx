import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNote } from '../../lib/api';
import type { NoteTagType } from '../../types/note';

import cssStyles from './NoteForm.module.css';
const css = (cssStyles || {}) as Record<string, string>;

const NoteSchema = Yup.object().shape({
  title: Yup.string().min(3, 'Too short!').max(50, 'Too long!').required('Required'),
  content: Yup.string().max(500, 'Too long!'),
  tag: Yup.string().oneOf(['Todo', 'Work', 'Personal', 'Meeting', 'Shopping']).required('Required'),
});

interface NoteFormProps {
  onClose: () => void;
}

// ПРАВИЛЬНО: Іменований експорт
export const NoteForm: React.FC<NoteFormProps> = ({ onClose }) => {
  const queryClient = useQueryClient();

  const createMutation = useMutation({
    mutationFn: (newNote: { title: string; content: string; tag: NoteTagType }) => createNote(newNote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notes'] });
      onClose();
    },
  });

  return (
    <Formik
      initialValues={{ title: '', content: '', tag: 'Todo' }}
      validationSchema={NoteSchema}
      onSubmit={(values) => {
        createMutation.mutate({
          title: values.title,
          content: values.content,
          tag: values.tag as NoteTagType,
        });
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="title">Title</label>
            <Field id="title" name="title" className={css.input} />
            <ErrorMessage name="title" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="content">Content</label>
            <Field id="content" name="content" as="textarea" rows={8} className={css.textarea} />
            <ErrorMessage name="content" component="span" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="tag">Tag</label>
            <Field id="tag" name="tag" as="select" className={css.select}>
              {['Todo', 'Work', 'Personal', 'Meeting', 'Shopping'].map(t => <option key={t} value={t}>{t}</option>)}
            </Field>
          </div>
          <div className={css.actions}>
            <button type="button" className={css.cancelButton} onClick={onClose}>Cancel</button>
            <button type="submit" className={css.submitButton} disabled={isSubmitting}>Create note</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
// ВАЖЛИВО: Перевірте, щоб тут внизу НЕ було рядка export default NoteForm!

