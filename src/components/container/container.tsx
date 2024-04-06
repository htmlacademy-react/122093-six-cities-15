import Header from '@components/header';
import { ReactNode } from 'react';

type TContainerProps = {
  children: ReactNode;
  extraClass?: string;
  classMain?: string;
  footer?: ReactNode;
};

function Container({ children, extraClass, classMain, footer }: TContainerProps) {
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

export default Container;
