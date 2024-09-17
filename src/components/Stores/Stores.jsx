import playStore from "../../assets/play_store.png";
import ipStore from "../../assets/app_store.png";
import gif from "../../assets/mobile_bike.gif";

const Stores = () => {
  return (
    <div className="bg-gray-200 justify-center items-center flex m-8">
      <div className="p-5 m-5 max-w-[400px]">
        <h1 className="font-bold text-2xl">Foodly is available for Android and IOS</h1>

        <div className="flex items-center justify-start pt-6">
          <img src={playStore} alt="" className="max-w-[150px]" />
          <img src={ipStore} alt="" className="max-w-[150px]" />
        </div>
      </div>

      <div className="p-5 m-5 max-w-[300px]">
        <img src={gif} alt="" />
      </div>
    </div>
  )
}

export default Stores