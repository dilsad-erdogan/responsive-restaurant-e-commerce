import Heading from "../Shared/Heading"
import image from "../../assets/biryani3.png";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    img: image,
    title: "Lorem ipsum dolor, sit amet consectetur adipising elit. Perspiciatis delectus architecto error nesciunt.",
    name: "Dilsad",
  },
  {
    id: 2,
    img: image,
    title: "Lorem ipsum dolor, sit amet consectetur adipising elit. Perspiciatis delectus architecto error nesciunt.",
    name: "Rukiye",
  },
  {
    id: 3,
    img: image,
    title: "Lorem ipsum dolor, sit amet consectetur adipising elit. Perspiciatis delectus architecto error nesciunt.",
    name: "Erdoğan",
  },
];

const Testimonial = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="justify-center items-center m-8">
      <Heading firsttitle={"What our customers say"} title={"Testimonial"} subtitle={"Lorem ipsum dolor, sit amet consectetur adipising elit. Perspiciatis delectus architecto error nesciunt."}/>

      <div className="overflow-hidden rounded-3xl min-w-[300px] max-w-[500px] sm:min-w-[400px] flex justify-center items-center bg-yellow-100">
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id}>
                <div className="justify-center items-center m-6">
                  <div className="flex flex-col justify-center items-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <img src={data.img} alt="" className="max-h-[8rem] max-w-[8rem] rounded-full" />
                    <p className="text-xs text-center">{data.title}</p>
                    <h1 className="text-2xl font-bold">{data.name}</h1>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial