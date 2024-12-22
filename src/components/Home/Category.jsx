import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategories } from './../../redux/CategorySlice';


const Category = ({ setCategory }) => {

    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories)

    console.log(categories, "categories");

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])


    return (
        <div className="w-1/10 bg-gray-200 text-center px-4  h-screen  sm:h-[685px]">
            <div className="border-b pb-2 text-xl font-bold pt-4">KATEGORİ</div>
            {
                categories?.map((category, i) => (
                    <div onClick={() => setCategory(category)} className="text-lg mt-2 cursor-pointer hover:bg-gray-100 p-2" key={i}>{category}</div>

                ))
            }
        </div>
    )
}

export default Category