import Slider from "react-slick";


const SliderComp = () => {
  const settings = {

    infinite: true,
    speed: 100,
    autoPlay: true,
    autoPlaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>

      <Slider {...settings}>
        <div className="!flex items-center bg-gray-200 px-6">
          <div>
            <div className=" text-center text-3xl font-bold">Nike"Jewel Swoosh" </div>
            <div className="text-lg my-4 p-4" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure.</div>
            <button className="border rounded-full cursor-pointer text-2xl w-[165px] md:w-[185px] lg:w-[250px] h-16 flex items-center justify-center lg:mx-auto bg-gray-100 " >İncele</button>
          </div>

          <div>
            <img src="/nike1.jpg" alt="nike resmi" />
          </div>
        </div>

        <div className="!flex items-center bg-gray-200 px-6">
          <div>
            <div className=" text-center text-3xl font-bold">Nike"Dunk" </div>
            <div className="text-xl my-4 p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure.</div>
            <button className="border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-100" >İncele</button>
          </div>
          <div>
            <img src="/nike2.png" alt="nike resmi" />
          </div>
        </div>

      </Slider>
    </div>
  )
}
export default SliderComp;
