import { ReactNode } from 'react';
import Header from '../header/header';

type TContainerProps = {
  children: ReactNode;
  extraClass?: string;
  classMain?: string;
  footer?: ReactNode;
};

export default function Container({ children, extraClass, classMain, footer }: TContainerProps) {
  return (
    <div className={`page ${extraClass ? extraClass : ''}`}>
      <Header classMain={classMain} />

      <main className={`page__main ${classMain ? classMain : ''}`}>
        {children}
      </main>
      {footer}
    </div>
  );
}
