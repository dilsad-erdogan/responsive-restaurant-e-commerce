import image from "../../assets/biryani5.png";
import { FaUnlockAlt, FaCarSide } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import Button from "../Shared/Button";

const Banner = () => {
  return (
    <div className="justify-center items-center flex pt-10 m-8">
      <img src={image} alt="" className="max-w-[400px] pr-5" />

      <div className="gap-2 max-w-[600px]">
        <h1 className="font-bold text-4xl pb-6">Lorem, ipsum dolor.</h1>
        <p className="pb-6 text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <p className="pb-4 text-sm text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <div className="flex gap-6 pb-6">
          <div className="bg-purple-100 p-6 rounded-full text-2xl">
            <FaUnlockAlt></FaUnlockAlt>
          </div>
          <div className="bg-orange-100 p-6 rounded-full text-2xl">
            <IoFastFood></IoFastFood>
          </div>
          <div className="bg-green-100 p-6 rounded-full text-2xl">
            <FaCarSide></FaCarSide>
          </div>
        </div>
        <Button text={"Order"} bgColor={"bg-yellow-400"} textColor={"text-white"}/>
      </div>
    </div>
  )
}

export default Banner