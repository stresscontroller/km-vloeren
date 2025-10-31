'use client';
import { Poppins } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';
import { usePathname } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import Sidebar from '@/components/shared/Sidebar';
import { SidebarProvider } from '../context/SidebarContext';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const hideNavbarPaths = [
    '/onboarding',
    '/onboarding/company',
    '/business-operations',
  ];
  const basicNavbarPaths = ['/employee-onboarding'];
  const shouldHideNavbar = hideNavbarPaths.includes(pathname);
  const isBasicNavbar = basicNavbarPaths.includes(pathname);
  const hideSidebarPaths = [
    '/onboarding',
    '/onboarding/company',
    '/profile',
    '/business-operations',
    '/employee-onboarding',
  ];
  const shouldHideSidebar = hideSidebarPaths.includes(pathname);

  return (
    <html lang="en">
      <head>
        <title>OneCo</title>
      </head>
      <body className={poppins.className}>
        <SidebarProvider>
          <StoreProvider>
            {!shouldHideNavbar && <Navbar isBasicNavbar={isBasicNavbar} />}
            <div className="flex">
              {!shouldHideSidebar && <Sidebar />}
              <div className="p-6 w-full bg-gray-100 overflow-hidden">
                {children}
              </div>
            </div>
          </StoreProvider>
        </SidebarProvider>
      </body>
    </html>
  );
}
