'use client';
import {Stack} from '@mui/material';
import {useSelector} from '@/store/store';
import {IProduct} from '@/types/products';
import ProductCard from '@/components/ProductCard';

export default function ProductList() {
  const {products} = useSelector((state) => state.products);

  return (
    <Stack direction={'row'} gap={2} sx={{overflowY: 'scroll', flexWrap: 'wrap', pt: 2, pb: 4, justifyContent: 'center'}}>
      {products.map((product: IProduct, i: number) => {
        return (
          <ProductCard key={i} product={product}/>
        );
      })}
    </Stack>
  );
}
