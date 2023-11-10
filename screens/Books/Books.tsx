import { BookList } from '@example/modules/goods';
import { PageLayout } from '@example/shared';

export const BooksScreen = () => {
  return (
    <PageLayout
      header={{ title: 'Книги' }}
      content={{ children: <BookList />, isPaddingDisabled: false }}
    />
  );
};
