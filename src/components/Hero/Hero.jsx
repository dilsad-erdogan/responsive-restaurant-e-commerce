import image from "../../assets/vector3.png";
import img1 from "../../assets/biryani.png";

const Hero = () => {
  const bgImage = {
    backgroundImage: `url(${image})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-around items-center dark:bg-gray-950 dark:text-white duration-200 gap-3" style={bgImage}>
      {/* Text section */}
      <div className="container pb-8 sm:pb-0 w-[650px]">
        <h1 className="text-7xl font-bold dark:text-white relative pb-4">Welcome <scan className="text-yellow-500">Foodie</scan> Zone</h1>
        <p className="dark:text-white pt-3 pb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias magni at optio</p>
        <button className="bg-gradient-to-r bg-yellow-400 to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3">Order Now</button>
      </div>

      {/* Picture section */}
      <div>
        <img src={img1} alt="" className="max-h-[400px]" />
      </div>
    </div>
  )
}

export default Hero