'use client';
import {Inter} from 'next/font/google';
import {ReactNode} from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '@/store/store';

const inter = Inter({subsets: ['latin']});

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={inter.className} style={{margin: 0}}>
    <ReduxProvider store={store}>
      {children}
    </ReduxProvider>
    </body>
    </html>
  );
}
