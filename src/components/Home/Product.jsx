import { useNavigate } from "react-router-dom"


const Product = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className="w-[300px]  p-3 mb-9  mx-5 border rounded-md relative !bg-gray-200 cursor-pointer">
            <div className="text-m whitespace-nowrap font-bold absolute rounded-md top-0 right-0 bg-black text-white p-1 m-1 text-center w-[78px]">
                {product?.price.toFixed(1)} <span className="text-sm">TL</span>
            </div>
            <div className="w-[200px] h-[200px] bg-gray-200 p-4">
                <img className="w-full h-full object-cover m-auto" src={product?.image} alt="Product" />
            </div>

            <div className="text-center px-3 mt-3 text-xl font-bold">{product.title}</div>
        </div>

    )
}

export default Product