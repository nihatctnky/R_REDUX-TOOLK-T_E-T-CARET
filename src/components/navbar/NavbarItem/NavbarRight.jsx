import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { SlBasket } from "react-icons/sl"
import { useDispatch } from 'react-redux';
import { getCartTotal } from "../../../redux/cartSlice";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


const NavbarRight = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { itemCount } = useSelector(state => state.carts)

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div className="flex items-center gap-8 ">
            <div className=" flex items-center border p-3 rounded-full bg-gray-200 ">
                <input className="bg-gray-200 outline-none px-2 " type="text" placeholder="Arama Yapınız.." />
                <BiSearch size={28} />
            </div>

            <AiOutlineHeart size={28} />
            <div onClick={() => navigate("/cart")} className="relative">
                <div className="absolute -top-7 -right-16 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{itemCount}</div>
            </div>
            <SlBasket size={28} />

        </div>
    )
}

export default NavbarRight