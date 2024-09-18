import { FaLocationArrow, FaMobileAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../../assets/food-logo.png";

const FooterLinks = [
  {
      id: 1,
      title: "Home",
      link: "/#",
  },
  {
      id: 2,
      title: "About",
      link: "/#about",
  },
  {
      id: 3,
      title: "Services",
      link: "/#services",
  },
  {
      id: 4,
      title: "Login",
      link: "/#login",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 justify-center items-center">
      <div className="w-full justify-center items-center p-2 m-3">
        <div className="grid md:grid-cols-3 pt-5">
          <div className="pt-8 px-4">
            <a href="#" className="font-semibold tracking-widest text-2xl uppercase sm:text-3xl flex items-center gap-4">
              <img src={logo} alt="" className="max-h-[70px]" />
              <h1 className="font-bold">Foodie</h1>
            </a>

            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</p>

            <div className="pt-8 px-4 col-span-2 sm:col-auto">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p>Selçuklu, Konya</p>
              </div>

              <div className="flex items-center gap-3 mt-6">
                <FaMobileAlt />
                <p>+90 507 184 52 46</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaGithub className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 px-4">
            <h1 className="text-xl font-bold sm:text-left mb-3">Important Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300">{data.title}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 px-4">
            <h1 className="text-xl font-bold sm:text-left mb-3">Links</h1>
            <ul className="space-y-3">
              {FooterLinks.map((data) => (
                <li key={data.id}>
                  <a href={data.link} className="text-gray-600 dark:text-gray-400 hover:text-black hover:dark:text-white duration-300">{data.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center p-4">
          <p className="text-gray-500 mt-4 dark:text-white/70 font-bold">Made with 💕 by The Dilşad Rukiye Erdoğan</p>
        </div>
      </div>
    </div>
  )
}

export default Footer