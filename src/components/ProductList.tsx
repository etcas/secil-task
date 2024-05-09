'use client';
import {Box, Stack} from '@mui/material';
import {useSelector} from '@/store/store';
import {IProduct} from '@/types/products';
import ProductCard from '@/components/ProductCard';

export default function ProductList() {
  const {products} = useSelector((state) => state.products);

  return (
    <Stack direction={'row'} gap={2} sx={{overflowY: 'scroll', flexWrap: 'wrap', pt: 2, justifyContent: 'center'}}>
      {products.map((product: IProduct, i: number) => {
        return (
          <ProductCard key={i} product={product}/>
        );
      })}
      {[...Array(5)].map((_, i) => <Box key={i} sx={{width: {xs: '36%', md: '25%', lg: '14%'}, px: 2}}/>)}
    </Stack>
  );
}
