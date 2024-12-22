import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal, clearCart } from '../redux/cartSlice';
import { useEffect } from 'react';
import CartComp from './../components/cart/CartComp';

const Cart = () => {
    const dispatch = useDispatch();
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts);

    // Bu useEffect sadece component mount olduğunda çalışacak, böylece sepet verisi her zaman güncellenmiş olacak
    useEffect(() => {
        dispatch(getCartTotal());
    }, [dispatch]); // Sadece dispatch'i bağımlılık olarak bırakıyoruz

    const handleClearCart = () => {
        dispatch(clearCart()); // Sepeti sıfırlamak için clearCart'ı çağırıyoruz
    };

    return (
        <div className="my-10">
            {carts.length > 0 ? (
                <div>
                    {carts.map((cart) => (
                        <CartComp key={cart.id} cart={cart} />
                    ))}

                    <div className="text-2xl font-bold mt-4 ">
                        <div>Toplam Ürün Sayısı: {itemCount}</div>
                        <div>Toplam Tutar: {totalAmount.toFixed(1)} TL</div>
                    </div>

                    <button
                        className="bg-red-500 text-white p-2 rounded mt-4"
                        onClick={handleClearCart}
                    >
                        Sepeti Temizle
                    </button>
                </div>
            ) : (
                <div>Sepetiniz Boş...</div>
            )}
        </div>
    );
};

export default Cart;
