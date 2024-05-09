import {createSlice} from '@reduxjs/toolkit';
import axios from '../../utils/axios';
import {dispatch} from '../store';
import {IProduct} from '@/types/products';

type ILoading = 'error' | 'products' | 'categories' | 'product'

type Props = {
  isLoading: {
    error: boolean,
    products: boolean,
    categories: boolean,
    product: boolean
  },
  error: string | null,
  products: IProduct[],
  categories: string[],
  product: IProduct | undefined
}

const initialState: Props = {
  isLoading: {
    error: false,
    products: false,
    categories: false,
    product: false,
  },
  error: null,
  products: [],
  categories: [],
  product: undefined,
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    startLoading(state, action: { payload: ILoading, type: string }) {
      state.isLoading[`${action.payload}`] = true;
    },
    hasError(state, action) {
      state.isLoading.error = false;
      state.error = action.payload;
    },
    getProductsSuccess(state, action) {
      state.isLoading.products = false;
      state.products = action.payload;
    },
    getCategoriesSuccess(state, action) {
      state.isLoading.categories = false;
      state.categories = action.payload;
    },
    getProductSuccess(state, action) {
      state.isLoading.product = false;
      state.product = action.payload;
    },
  },
});

export default slice.reducer;

export function getProducts(limit: number) {
  dispatch(slice.actions.startLoading('products'));
  return async () => {
    try {
      const response = await axios.get(`/products?limit=${limit}`);
      console.log('Products', response.data);
      dispatch(slice.actions.getProductsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getCategories() {
  dispatch(slice.actions.startLoading('categories'));
  return async () => {
    try {
      const response = await axios.get(`/products/categories`);
      console.log('Categories', response.data);
      dispatch(slice.actions.getCategoriesSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getCategoryProducts(category: string, limit: number) {
  dispatch(slice.actions.startLoading('products'));
  return async () => {
    try {
      const response = await axios.get(`/products/category/${category}?limit=${limit}`);
      console.log('CategoryProducts', response.data);
      dispatch(slice.actions.getProductsSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getProduct(id: number) {
  dispatch(slice.actions.startLoading('product'));
  return async () => {
    try {
      const response = await axios.get(`/products/${id}`);
      console.log('Product', response.data);
      dispatch(slice.actions.getProductSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}
