import {Box, Stack, Typography} from '@mui/material';
import {IProduct} from '@/types/products';
import {useRouter} from 'next/navigation';

export default function ProductCard({product}: { product: IProduct }) {
  const router = useRouter();

  return (
    <Stack onClick={() => router.push(`${product.title}?id=${product.id}`)}
         sx={{
           width: {xs: '36%', md: '25%', lg: '14%'}, aspectRatio: .75, boxShadow: 1, borderRadius: 4, px: 2, py: 1, justifyContent: 'space-between', flexDirection: 'column', spacing: 2,
           '&:hover': {
             boxShadow: 3,
             cursor: 'pointer',
           },
         }}>
      <Box sx={{p: 0, width: '100%', height: '60%'}}>
        <Box component="img" src={product.image} alt={product.title} sx={{width: '100%', height: '100%', objectFit: 'contain'}}/>
      </Box>
      <Stack direction={'column'} spacing={.5} sx={{width: '100%', height: '40%', justifyContent: 'flex-end'}}>
        <Typography sx={{fontWeight: '300', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical'}}>
          {product.title}
        </Typography>
        <Typography sx={{fontSize: '1.1rem', fontWeight: '500'}}>{product.price.toFixed(2)} ₺</Typography>
      </Stack>
    </Stack>
  );
}
