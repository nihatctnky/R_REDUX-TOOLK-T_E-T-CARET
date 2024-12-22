
import { BrowserRouterasRouter } from 'react-router-dom';
import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
const CartComp = ({ cart }) => {
  const dispatch = useDispatch()
  return (
    <div className="my-10 flex items-center justify-between">
      <img className="w-[150px] h-[150px] object-cover" src={cart?.image} alt="" />
      <div className="w-[470px]">
        <div className="text-xl whitespace-normal">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>

      <div className="font-bold text-xl p-4">
        {/* Fiyatı doğru şekilde hesapla, yalnızca görselleştirmede yuvarla */}
        {cart?.price.toFixed(2)} TL
      </div>


      <div onClick={() => dispatch(removeFromCart(cart?.id))} className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-14 flex items-center justify-center whitespace-nowrap px-2 pr-1">Ürünü Sil</div>
    </div>
  )
}

export default CartComp