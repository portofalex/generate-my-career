import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <div className="relative container flex flex-col min-h-full p-2 sm:p-4 mx-auto">
      <Header />
      <Outlet />
    </div>
  );
}
