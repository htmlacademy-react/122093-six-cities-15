import { ReactNode } from 'react';
import Header from './header';

type TContainerProps = {
  children: ReactNode;
  extraClass?: string;
  classMain?: string;
};

export default function Container({ children, extraClass, classMain }: TContainerProps) {
  return (
    <div className={`page ${extraClass ? extraClass : ''}`}>
      <Header classMain={classMain} />

      <main className={`page__main ${classMain ? classMain : ''}`}>
        {children}
      </main>
    </div>
  );
}
