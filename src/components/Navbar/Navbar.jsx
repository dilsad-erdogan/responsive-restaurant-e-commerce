import logo from "../../assets/food-logo.png";
import Button from "../Shared/Button";
import DarkMode from "./DarkMode";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center px-5">
            <a href="#" className="flex font-semibold text-2xl sm:text-3xl gap-2">
              <img src={logo} alt="logo" className="w-10" />
              Foodie
            </a>
          </div>

          {/* Dark and Link Section */}
          <div className="flex items-center gap-4">
            {/* Dark mode section */}
            <DarkMode />

            {/* Links section */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Button section */}
            <Button text={"Order"} bgColor={"bg-yellow-400"} textColor={"text-white"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar