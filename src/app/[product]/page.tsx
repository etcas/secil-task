'use client';
import {Box, Stack, Typography} from '@mui/material';
import MainLayout from '@/layouts/MainLayout';
import {useEffect} from 'react';
import {useSearchParams} from 'next/navigation';
import {useDispatch, useSelector} from '@/store/store';
import {getProduct} from '@/store/slices/products';

export default function Product() {
  const searchParams = useSearchParams();
  const dispatch = useDispatch();
  const {product, isLoading} = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct(parseInt(searchParams.get('id') ?? '')));
  }, [dispatch, searchParams]);

  return (
    <MainLayout>
      {product && !isLoading.product &&
          <Stack direction={{xs: 'column', md: 'row'}} spacing={8} sx={{p: 4, justifyContent: 'center', alignItems: {xs: 'center', md: 'flex-start'}}}>
              <Box sx={{p: 0, width: {xs: '50%', md: '20%'}}}>
                  <Box component="img" src={product?.image} alt={product?.title} sx={{width: '100%', height: '100%', objectFit: 'contain'}}/>
              </Box>
              <Stack direction={'column'} spacing={2} sx={{width: {xs: '100%', md: '40%'}}}>
                  <Typography sx={{fontWeight: '400', fontSize: '1.4rem'}}>
                    {product?.title}
                  </Typography>
                  <Stack direction={'row'} spacing={1} sx={{justifyContent: 'flex-end', alignItems: 'center'}}>
                      <Typography sx={{fontWeight: '400', fontSize: '1.1rem'}}>
                        {product?.rating.rate} ⭐️
                      </Typography>
                      <Typography sx={{fontWeight: '300', fontSize: '1rem'}}>
                        {product?.rating.count} Reviews
                      </Typography>
                  </Stack>
                  <Typography sx={{fontWeight: '300', textAlign: 'justify'}}>
                    {product?.description}
                  </Typography>
                  <Typography sx={{fontSize: '1.6rem', fontWeight: '500'}}>{product?.price.toFixed(2)} ₺</Typography>
              </Stack>
          </Stack>
      }
    </MainLayout>
  );
}
