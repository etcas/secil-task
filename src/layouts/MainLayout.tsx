import {Stack} from '@mui/material';
import Header from '@/layouts/Header';
import {ReactNode, Suspense} from 'react';

export default function MainLayout({children}: { children: ReactNode }) {
  return (
    <Stack direction={'column'} spacing={'10vh'}>
      <Header/>
      <Suspense>
        {children}
      </Suspense>
    </Stack>
  );
}
