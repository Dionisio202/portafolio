import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
  <Navbar />
  <main className="flex-grow w-full">{children}</main>
  <footer className="bg-gray-100 text-center p-4 text-sm text-gray-500 w-full">
    &copy; {new Date().getFullYear()} Edison - All rights reserved.
  </footer>
</div>

  );
};

export default DefaultLayout;
