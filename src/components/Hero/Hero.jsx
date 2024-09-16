import image from "../../assets/vector3.png";
import img1 from "../../assets/biryani.png";
import Button from "../Shared/Button";

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
        <h1 className="text-7xl font-bold dark:text-white relative">Welcome <scan className="text-yellow-500">Foodie</scan> Zone</h1>
        <p className="dark:text-white pt-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias magni at optio</p>
        <Button text={"Order Now"} bgColor={"bg-yellow-500"} textColor={"text-white"} />
      </div>

      {/* Picture section */}
      <div>
        <img src={img1} alt="" className="max-h-[400px]" />
      </div>
    </div>
  )
}

export default Hero