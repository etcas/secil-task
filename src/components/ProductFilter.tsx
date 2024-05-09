'use client';
import {Chip, Stack} from '@mui/material';
import {useDispatch, useSelector} from '@/store/store';
import {useEffect, useState} from 'react';
import {getCategories, getCategoryProducts, getProducts} from '@/store/slices/products';
import {useRouter, useSearchParams} from 'next/navigation';

export default function ProductFilter() {
  const dispatch = useDispatch();
  const {categories} = useSelector((state) => state.products);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    dispatch(getCategories());
    selectedCategory ? dispatch(getCategoryProducts(selectedCategory, 30)) : dispatch(getProducts(30));
  }, [dispatch]);

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category'));

  const handleCategory = (category: string) => {
    if (category !== selectedCategory) {
      setSelectedCategory(category);
      dispatch(getCategoryProducts(category, 30));
      router.push(`/?category=${category}`);
    } else {
      setSelectedCategory('');
      dispatch(getProducts(30));
      router.push(`/`);
    }
  };

  return (
    <Stack direction={'row'} sx={{p: 2, alignItems: 'center', backgroundColor: 'white', overflowX: 'scroll', zIndex: 0}} spacing={1}>
      {categories.map((category, i) => {
        const camelcaseCategory = category.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
        return (
          <Chip key={i} label={camelcaseCategory} variant={category === selectedCategory ? 'filled' : 'outlined'} onClick={() => handleCategory(category)}/>
        );
      })}
    </Stack>
  );
}
