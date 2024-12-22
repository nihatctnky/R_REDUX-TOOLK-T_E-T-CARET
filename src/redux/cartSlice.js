import { createSlice } from '@reduxjs/toolkit';

// LocalStorage'dan sepeti al
const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        return JSON.parse(cart);
    } else {
        return [];
    }
}

// LocalStorage'a sepeti kaydet
const storeInLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
}

const initialState = {
    carts: fetchFromLocalStorage(),  // LocalStorage'dan veriyi al
    itemCount: 0,  // Ürün sayısı
    totalAmount: 0  // Sepet toplamı
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // Aynı üründen var mı kontrol et
            const isItemInCart = state.carts.find(item => item.id === action.payload.id);

            if (isItemInCart) {
                // Eğer ürün varsa, quantity arttır
                const updatedCart = state.carts.map(item => {
                    if (item.id === action.payload.id) {
                        const updatedQuantity = item.quantity + action.payload.quantity;
                        const updatedTotalPrice = updatedQuantity * item.price;
                        return {
                            ...item,
                            quantity: updatedQuantity,
                            totalPrice: updatedTotalPrice
                        };
                    }
                    return item;
                });

                // Sepeti güncelle
                state.carts = updatedCart;
                storeInLocalStorage(state.carts);

            } else {
                // Yeni ürün ekle
                const newProduct = {
                    ...action.payload,
                    totalPrice: action.payload.price * action.payload.quantity  // Yeni ürün için totalPrice hesapla
                };
                state.carts.push(newProduct);
                storeInLocalStorage(state.carts);
            }
        },

        removeFromCart: (state, action) => {
            // Ürün silme
            const updatedCart = state.carts.filter(item => item.id !== action.payload);
            state.carts = updatedCart;
            storeInLocalStorage(state.carts);
        },

        clearCart: (state) => {
            // Sepeti temizle
            state.carts = [];
            storeInLocalStorage(state.carts);
        },

        getCartTotal: (state) => {
            // Sepet toplamını hesapla
            state.totalAmount = state.carts.reduce((total, item) => {
                return total + (item.price * item.quantity); // Her ürünün fiyatını miktarıyla çarpıp toplam tutarı hesapla
            }, 0);

            // Toplam ürün sayısını hesapla
            state.itemCount = state.carts.reduce((count, item) => {
                return count + item.quantity; // Her üründen kaç adet olduğunu toplar
            }, 0);
        }
    }
});

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions;

export default cartSlice.reducer;
