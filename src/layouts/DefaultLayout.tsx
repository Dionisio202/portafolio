// DefaultLayout.jsx
import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      {/* Añade padding-top para compensar el navbar fixed */}
      <main className="flex-grow w-full pt-20">{children}</main>
    </div>
  );
};

export default DefaultLayout;