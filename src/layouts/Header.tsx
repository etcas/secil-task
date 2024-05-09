"use client"
import {Stack, Typography} from '@mui/material';
import {useRouter} from 'next/navigation';

export default function Header() {
  const router = useRouter();

  return (
    <Stack direction={'row'} onClick={() => router.push('/')} sx={{
      position: 'fixed',
      backgroundColor: 'white',
      width: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottom: 1,
      borderColor: 'lightgrey',
      px: 2,
      height: '10vh',
      zIndex: 1,
      '&:hover': {
        cursor: 'pointer',
      },
    }}>
      <Typography sx={{fontSize: '1.6rem', fontWeight: '300'}}>
        <b>Task</b>Store
      </Typography>
    </Stack>
  );
}
