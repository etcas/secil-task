import {Stack} from '@mui/material';
import ProductList from '@/components/ProductList';
import MainLayout from '@/layouts/MainLayout';
import ProductFilter from '@/components/ProductFilter';

export default function Home() {
  return (
    <MainLayout>
      <Stack direction={'column'}>
        <ProductFilter/>
        <ProductList/>
      </Stack>
    </MainLayout>
  );
}
