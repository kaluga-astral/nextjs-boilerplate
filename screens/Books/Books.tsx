import { BookList } from '@example/modules/Goods';
import { PageLayout } from '@example/shared';

export const BooksScreen = () => {
  return (
    <PageLayout
      header={{ title: 'Книги' }}
      content={{ children: <BookList /> }}
    />
  );
};
