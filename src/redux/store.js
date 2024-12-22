import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './CategorySlice'; // Category slice'ı doğru şekilde içe aktarın
import productSlice from './productSlice'; // productSlice'ı default olarak içe aktarın
import cartSlice from './cartSlice';

export const store = configureStore({
    reducer: {
        categories: categorySlice,
        products: productSlice, // Doğrudan productSlice kullanın
        carts: cartSlice
    },
});
