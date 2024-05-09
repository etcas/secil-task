import {Stack, Typography} from '@mui/material';

export default function Header() {
  return (
    <Stack direction={'row'} sx={{
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
    }}>
      <Typography sx={{fontSize: '1.6rem', fontWeight: '300'}}>
        <b>Task</b>Store
      </Typography>
    </Stack>
  );
}
