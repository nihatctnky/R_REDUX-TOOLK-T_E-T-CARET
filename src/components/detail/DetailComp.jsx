import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/cartSlice";

const DetailComp = ({ productDetail }) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(0);

    const decrement = () => {
        if (quantity > 0) setQuantity(quantity - 1);
    };

    const increment = () => {
        if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1);
    };

    const addBasket = () => {
        dispatch(addToCart({
            id: productDetail?.id,
            title: productDetail?.title,
            image: productDetail?.image,
            price: productDetail?.price,
            quantity: quantity
        }));
    };

    // onChange handler'ı
    const handleQuantityChange = (e) => {
        const value = e.target.value;
        // Yalnızca sayısal değerler kabul edilsin
        if (!isNaN(value) && value >= 0 && value <= productDetail?.rating?.count) {
            setQuantity(Number(value));
        }
    };

    return (
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 my-10">
            <img className="w-[700px] h-[700px] object-cover" src={productDetail?.image} alt="" />
            <div className="pt-auto mx-auto">
                <div className="text-4xl font-bold">{productDetail?.title}</div>
                <div className="my-2">{productDetail?.description}</div>
                <div className="my-2 text-xl text-red-500">Rating: {productDetail?.rating?.rate}</div>
                <div className="my-2 text-xl text-red-500">Count: {productDetail?.rating?.count}</div>
                <div className="text-5xl font-bold">{productDetail?.price} <span className="text-sm">TL</span></div>
                <div className="flex items-center gap-5 my-4">
                    <div onClick={decrement} className="text-5xl cursor-pointer">-</div>

                    <input
                        className="w-20 text-center text-4xl font-bold"
                        type="text"
                        value={quantity}
                        onChange={handleQuantityChange}  // onChange handler'ını ekledik
                    />

                    <div onClick={increment} className="text-4xl cursor-pointer">+</div>
                </div>
                <div onClick={addBasket} className="border w-[180px] h-16 text-2xl rounded-md bg-gray-200 flex items-center justify-center cursor-pointer my-4">
                    Sepete Ekle
                </div>
            </div>
        </div>
    );
};

export default DetailComp;
