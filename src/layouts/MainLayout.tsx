import {Stack} from '@mui/material';
import Header from '@/layouts/Header';
import {ReactNode} from 'react';

export default function MainLayout({children}: { children: ReactNode }) {
  return (
    <Stack direction={'column'} spacing={'10vh'}>
      <Header/>
      {children}
    </Stack>
  );
}
