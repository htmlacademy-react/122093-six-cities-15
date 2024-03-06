import { ReactNode } from 'react';
import Header from './header';
import { Offer } from '../types/offer';

type TContainerProps = {
  children: ReactNode;
  extraClass?: string;
  classMain?: string;
  favoritesCount?: Offer[];
  footer?: ReactNode;
};

export default function Container({ children, extraClass, classMain, favoritesCount, footer }: TContainerProps) {
  return (
    <div className={`page ${extraClass ? extraClass : ''}`}>
      <Header classMain={classMain} favoritesCount={favoritesCount} />

      <main className={`page__main ${classMain ? classMain : ''}`}>
        {children}
      </main>
      {footer}
    </div>
  );
}
